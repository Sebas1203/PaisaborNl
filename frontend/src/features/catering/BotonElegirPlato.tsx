'use client';

import { useCatering } from '@/providers/CateringProvider';

// "Elegir este plato" de las tarjetas de /catering: lo añade al borrador y baja al formulario
export function BotonElegirPlato({ platoId, className }: { platoId: string; className?: string }) {
  const { borrador, agregarPlato } = useCatering();
  const elegido = borrador.items.some((i) => i.id === platoId);
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        agregarPlato(platoId);
        document.getElementById('cotizador')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {elegido ? 'Elegido · ajustar porciones' : 'Elegir este plato'}
    </button>
  );
}
