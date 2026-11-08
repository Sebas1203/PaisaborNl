import Image from 'next/image';

// Logo de Paisabor (public/images/logo). Con withText añade el nombre en Epilogue al lado.
const LOGO_SRC = '/images/logo/paisabor-logo-192.png';

const SIZES = {
  sm: { px: 32, text: 'text-lg' },
  md: { px: 45, text: 'text-2xl' },
  lg: { px: 64, text: 'text-3xl' },
} as const;

export function BrandLogo({
  size = 'md',
  withText = false,
  className = '',
  textClassName = 'text-primary',
  priority = false,
}: {
  size?: keyof typeof SIZES;
  withText?: boolean;
  className?: string;
  /** Color u otros estilos del texto (por defecto text-primary) */
  textClassName?: string;
  priority?: boolean;
}) {
  const { px, text } = SIZES[size];
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={LOGO_SRC}
        alt={withText ? '' : 'Paisabor'}
        width={px}
        height={px}
        priority={priority}
        className="object-contain shrink-0"
      />
      {withText && (
        <span className={`font-headline font-bold tracking-tighter ${text} ${textClassName}`}>Paisabor</span>
      )}
    </span>
  );
}
