'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ConfirmDialog } from '@/components/ui/Modal';
import { FEEDBACK_URL } from '@/config/prototipo';
import { reiniciarDatosPrueba } from '@/lib/prototipo';

// Barra fija "Prototipo de prueba" para la fase de pruebas con usuarios: explica que el pago es
// simulado, enlaza al formulario de comentarios (si NEXT_PUBLIC_FEEDBACK_URL está definida) y
// permite reiniciar los datos de prueba. Se puede plegar; el estado se recuerda en la pestaña.

const CLAVE_OCULTA = 'paisabor:barra-prototipo';
// Pantallas sin la navegación inferior móvil de la tienda
const SIN_NAV_MOVIL = ['/admin', '/login', '/registro', '/recuperar-contrasena'];

export function BarraPrototipo() {
  const pathname = usePathname();
  const [plegada, setPlegada] = useState(false);
  const [confirmar, setConfirmar] = useState(false);
  const [reiniciando, setReiniciando] = useState(false);

  useEffect(() => {
    try {
      setPlegada(sessionStorage.getItem(CLAVE_OCULTA) === 'oculta');
    } catch {
      // sin sessionStorage la barra empieza desplegada
    }
  }, []);

  function cambiarPlegada(valor: boolean) {
    setPlegada(valor);
    try {
      if (valor) sessionStorage.setItem(CLAVE_OCULTA, 'oculta');
      else sessionStorage.removeItem(CLAVE_OCULTA);
    } catch {
      // solo se pierde recordar el estado
    }
  }

  function reiniciar() {
    setReiniciando(true);
    reiniciarDatosPrueba();
    window.location.assign('/');
  }

  // En la tienda, en móvil, la barra va encima de la navegación inferior fija
  const conNavMovil = !SIN_NAV_MOVIL.some((base) => pathname === base || pathname.startsWith(`${base}/`));
  const posicion = conNavMovil ? 'bottom-20 md:bottom-0' : 'bottom-0';

  return (
    <>
      {plegada ? (
        <button
          type="button"
          onClick={() => cambiarPlegada(false)}
          className={`fixed ${posicion} left-3 md:left-4 md:bottom-4 z-[45] inline-flex items-center gap-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 text-xs font-label font-semibold shadow-lg`}
        >
          <span className="material-symbols-outlined text-base">science</span> Prototipo
        </button>
      ) : (
        <div
          role="region"
          aria-label="Aviso de prototipo"
          className={`fixed ${posicion} inset-x-0 z-[45] bg-tertiary-fixed text-on-tertiary-fixed shadow-[0_-4px_20px_-8px_rgba(28,28,25,0.25)]`}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 py-1.5 flex items-center gap-2 sm:gap-4 text-xs whitespace-nowrap">
            <p className="flex items-center gap-1.5 font-semibold min-w-0">
              <span className="material-symbols-outlined text-base">science</span>
              <span className="sm:hidden">Prototipo</span>
              <span className="hidden sm:inline">Prototipo de prueba</span>
              <span className="font-normal hidden lg:inline">· pago simulado, los datos se guardan solo en este navegador</span>
            </p>
            <div className="flex items-center gap-1 sm:gap-2 ml-auto">
              {FEEDBACK_URL && (
                <a
                  href={FEEDBACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-on-tertiary-fixed text-tertiary-fixed px-2.5 py-1 font-semibold hover:opacity-90"
                >
                  <span className="material-symbols-outlined text-sm">rate_review</span>
                  <span className="sm:hidden">Comentarios</span>
                  <span className="hidden sm:inline">Dejar comentarios</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setConfirmar(true)}
                aria-label="Reiniciar datos de prueba"
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 font-semibold underline underline-offset-2 hover:no-underline"
              >
                <span className="material-symbols-outlined text-sm">restart_alt</span>
                <span className="sm:hidden">Reiniciar</span>
                <span className="hidden sm:inline">Reiniciar datos de prueba</span>
              </button>
              <button type="button" aria-label="Plegar el aviso de prototipo" onClick={() => cambiarPlegada(true)} className="p-1 rounded-md hover:bg-on-tertiary-fixed/10">
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      )}
      <ConfirmDialog
        abierto={confirmar}
        titulo="¿Reiniciar los datos de prueba?"
        mensaje="Se borran de este navegador los pedidos, las cuentas, las reservas, el carrito y la sesión de la prueba, y se vuelve a empezar con los datos de ejemplo."
        textoConfirmar="Sí, reiniciar"
        peligro
        procesando={reiniciando}
        onConfirmar={reiniciar}
        onCancelar={() => setConfirmar(false)}
      />
    </>
  );
}
