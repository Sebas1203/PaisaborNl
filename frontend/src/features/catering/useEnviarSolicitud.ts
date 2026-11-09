'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validarSolicitudCatering, type ErroresCatering } from '@/lib/catering';
import { useAuth } from '@/providers/AuthProvider';
import { useCatering } from '@/providers/CateringProvider';
import { mensajeDeError, reservasService } from '@/services';

// Envío de la solicitud de catering, compartido por /catering y /catering/reservar:
// valida, crea la reserva (pendiente), limpia el borrador y va a la confirmación.
export function useEnviarSolicitud() {
  const { borrador, limpiar } = useCatering();
  const { user } = useAuth();
  const router = useRouter();
  const [errores, setErrores] = useState<ErroresCatering>({});
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar() {
    const nuevos = validarSolicitudCatering(borrador);
    setErrores(nuevos);
    if (Object.keys(nuevos).length || !borrador.tipoEvento) {
      setError('Revisa los campos marcados antes de enviar la solicitud.');
      return;
    }
    setError(null);
    setEnviando(true);
    try {
      const reserva = await reservasService.crear({
        tipoEvento: borrador.tipoEvento,
        invitados: borrador.invitados,
        fecha: borrador.fecha,
        hora: borrador.hora,
        ciudad: borrador.ciudad,
        nombre: borrador.nombre,
        email: borrador.email,
        telefono: borrador.telefono,
        comentarios: borrador.comentarios,
        items: borrador.items,
        clienteId: user?.id,
      });
      router.push(`/catering/reserva-pendiente?id=${encodeURIComponent(reserva.id)}`);
      limpiar();
    } catch (e) {
      setError(mensajeDeError(e));
      setEnviando(false);
    }
  }

  return { errores, error, enviando, enviar };
}
