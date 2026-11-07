// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/iniciar_sesi_n_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function LoginPage() {
  return (
    <>
    <div className="bg-surface font-body text-on-surface h-screen w-full relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-cover bg-center" data-alt="A beautifully blurred, atmospheric photograph of a traditional Colombian coffee hacienda at dawn. The scene features warm, golden morning light filtering through lush green coffee plants, casting a soft, inviting glow. The colors are dominated by rich earthy browns, terracotta accents, and soft cream highlights. The image is highly cinematic, deliberately out of focus to serve as an elegant, serene UI background that exudes a premium, tactile, and tranquil aesthetic without overwhelming the foreground." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHNjMaHKwtopWEt4Hoal5DTHdSy1HYEVCSA3iDXMQqP6evzwbbzZx56PXoqGNFO_macvX9B9_gwOwrRP_oYuTUVulzsL1J87WN9JejFSxmDfkVqueOWJjmv2HxbB6A7k00iI5Q-U81sEc3FhoqjDgE5N8wOU_6tUIOr6IivH0wSWFy2oq6709oLzow4KBMajaltxuM_GE1Dhio03vlDt_AVxBB6LWghZFWKvasFDSBIOnYFzlngVe4')" }}></div>
      <div className="absolute inset-0 z-0 bg-linear-to-t from-primary/80 via-primary/40 to-surface/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 z-0 bg-surface/20 backdrop-blur-xs"></div>
      <main className="relative z-10 w-full max-w-md mx-4 md:mx-auto bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_40px_40px_-10px_rgba(28,28,25,0.05)]">
        <header className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-20 w-20 rounded-full bg-surface-container-high border border-surface-container-highest overflow-hidden flex items-center justify-center shadow-xs">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYNzKV1q-8t7Ox2DJSYKLn9qkiC4A3gGX6x2QXKYieoKbn3dc8iT_OSwgvIow3lGEOtY0FfB-bwCpvJk3m4SoqiJRZItb5tBAIoo8YTMc4rvzWZq8EZsL_LJbhNGxjVepNlaBbHSamREbcGQbwpVEohEd53UmhIYUcLdF-De4kV7xHQy_xA1NwxODMswdCetUTbKol940iFCE9E93K23UrZUzxFZBh2O_Dxrk3rTgG1IXFXjEevpebv4Y8IKqgwY7jCQ" alt="Paisabor Logo" className="w-full h-full object-contain p-2" />
            </div>
          </div>
          <h1 className="font-headline text-display text-4xl md:text-5xl font-extrabold text-primary tracking-tighter mb-2 mt-2">
            Paisabor
          </h1>
          <p className="font-body text-on-surface-variant text-sm md:text-base">
            Del Corazón de Colombia
          </p>
        </header>
        <div className="flex flex-col gap-8">
          <div className="relative group">
            <label className="block font-body text-xs text-on-surface-variant mb-2 uppercase tracking-[0.1em] font-medium" htmlFor="username">
              Nombre de Usuario
            </label>
            <div className="relative">
              <input className="form-input w-full bg-transparent border-0 border-b-2 border-surface-container-highest px-0 py-2 text-on-surface font-body text-lg focus:ring-0 focus:border-secondary transition-colors placeholder:text-outline-variant/50" id="username" name="username" placeholder="Ingresa tu usuario" required type="text" />
              {' '}
              <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-secondary transition-colors" data-icon="person">
                person
              </span>
            </div>
          </div>
          <div className="relative group">
            <label className="block font-body text-xs text-on-surface-variant mb-2 uppercase tracking-[0.1em] font-medium" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <input className="form-input w-full bg-transparent border-0 border-b-2 border-surface-container-highest px-0 py-2 text-on-surface font-body text-lg focus:ring-0 focus:border-secondary transition-colors placeholder:text-outline-variant/50" id="password" name="password" placeholder="••••••••" required type="password" />
              {' '}
              <button aria-label="Mostrar contraseña" className="absolute right-0 top-1/2 -translate-y-1/2 text-outline-variant hover:text-secondary group-focus-within:text-secondary transition-colors" type="button">
                <span className="material-symbols-outlined" data-icon="visibility">
                  visibility
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-end -mt-4">
            <Link className="font-body text-sm text-secondary hover:text-primary transition-colors duration-300" href="/recuperar-contrasena">
              ¿Olvidé mi contraseña?
            </Link>
          </div>
          <Go href="/catalogo" className="w-full mt-4 bg-primary text-on-primary font-headline font-bold text-lg py-4 rounded-lg hover:bg-primary-container hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20" type="button">
            Entrar
          </Go>
        </div>
        <div className="mt-10 text-center border-t border-surface-container-highest pt-6">
          <p className="font-body text-on-surface-variant text-sm">
            ¿Aún no tienes el sabor en casa?{' '}
            <Link className="font-headline font-bold text-secondary hover:text-primary transition-colors ml-1" href="/registro">
              Crear cuenta
            </Link>
          </p>
        </div>
      </main>
    </div>
    </>
  );
}
