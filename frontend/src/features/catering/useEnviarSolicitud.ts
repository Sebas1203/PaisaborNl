'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { validarSolicitudCatering, type ErroresCatering } from '@/lib/catering';
import { useCatering } from '@/providers/CateringProvider';

// Envío de la solicitud de catering, compartido por /catering y /catering/reservar
export function useEnviarSolicitud() {
  const { borrador } = useCatering();
  const router = useRouter();
  const [errores, setErrores] = useState<ErroresCatering>({});
  const [error, setError] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar() {
    const nuevos = validarSolicitudCatering(borrador);
    setErrores(nuevos);
    if (Object.keys(nuevos).length) {
      setError('Revisa los campos marcados antes de enviar la solicitud.');
      return;
    }
    setError(null);
    setEnviando(true);
    router.push('/catering/reserva-pendiente');
  }

  return { errores, error, enviando, enviar };
}
