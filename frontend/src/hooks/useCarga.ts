'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { mensajeDeError } from '@/services';

/**
 * Carga datos de un servicio con estados de carga y error. `recargar` vuelve a pedirlos.
 * Las dependencias controlan cuándo se repite la carga (p. ej. el id del usuario).
 */
export function useCarga<T>(cargar: () => Promise<T>, deps: React.DependencyList) {
  const [datos, setDatos] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);
  const cargarRef = useRef(cargar);
  cargarRef.current = cargar;
  const turno = useRef(0);

  const recargar = useCallback(() => {
    const actual = ++turno.current;
    setCargando(true);
    setError(null);
    cargarRef
      .current()
      .then((valor) => actual === turno.current && setDatos(valor))
      .catch((e) => actual === turno.current && setError(mensajeDeError(e)))
      .finally(() => actual === turno.current && setCargando(false));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(recargar, deps);

  return { datos, setDatos, error, cargando, recargar };
}
