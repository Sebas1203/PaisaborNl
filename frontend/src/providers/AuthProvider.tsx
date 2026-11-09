'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { authService, ServiceError, type CambiosPerfil, type DatosRegistro, type Rol, type Usuario } from '@/services';

interface AuthContextValue {
  user: Usuario | null;
  /** null mientras no hay sesión */
  rol: Rol | null;
  /** true hasta que se resuelve la sesión guardada */
  loading: boolean;
  signIn: (email: string, password: string) => Promise<Usuario>;
  signUp: (datos: DatosRegistro) => Promise<Usuario>;
  signOut: () => Promise<void>;
  updateProfile: (cambios: CambiosPerfil) => Promise<Usuario>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return auth;
}

// Sesión del usuario para toda la app. Delega en authService (mock hoy, Supabase mañana).
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let activo = true;
    authService
      .getSession()
      .then((usuario) => activo && setUser(usuario))
      .catch(() => activo && setUser(null))
      .finally(() => activo && setLoading(false));
    return () => {
      activo = false;
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const usuario = await authService.signIn(email, password);
    setUser(usuario);
    return usuario;
  }, []);

  const signUp = useCallback(async (datos: DatosRegistro) => {
    const usuario = await authService.signUp(datos);
    setUser(usuario);
    return usuario;
  }, []);

  const signOut = useCallback(async () => {
    await authService.signOut();
    setUser(null);
  }, []);

  const updateProfile = useCallback(
    async (cambios: CambiosPerfil) => {
      if (!user) throw new ServiceError('Tu sesión ha caducado. Vuelve a iniciar sesión.');
      const usuario = await authService.updateProfile(user.id, cambios);
      setUser(usuario);
      return usuario;
    },
    [user],
  );

  const value = useMemo<AuthContextValue>(
    () => ({ user, rol: user?.rol ?? null, loading, signIn, signUp, signOut, updateProfile }),
    [user, loading, signIn, signUp, signOut, updateProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
