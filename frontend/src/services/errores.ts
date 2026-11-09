// Error de negocio de los servicios: el mensaje ya está en español y se puede mostrar al usuario.
export class ServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ServiceError';
  }
}

/** Mensaje para la UI a partir de cualquier error capturado */
export function mensajeDeError(error: unknown): string {
  if (error instanceof ServiceError) return error.message;
  return 'Ocurrió un error inesperado. Inténtalo de nuevo.';
}
