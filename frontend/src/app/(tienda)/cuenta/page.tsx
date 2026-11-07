// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/perfil_de_usuario_paisabor
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Go } from '@/components/ui/Go';

export default function CuentaPage() {
  return (
    <>
    <div className="bg-surface text-on-surface font-body antialiased selection:bg-secondary/20 min-h-screen flex">
      <main className="w-full p-8 lg:p-16 pt-28 lg:pt-28">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="font-headline text-display-lg text-primary tracking-tight -ml-1">
              Mi Perfil
            </h2>
            <p className="font-body text-on-surface-variant text-lg mt-2">
              Bienvenido de vuelta, Juan Pérez.
            </p>
          </div>
          <Go href="/cuenta/editar" className="px-6 py-2 border border-outline-variant/30 text-on-surface rounded-lg hover:bg-surface-container transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">
              edit
            </span>
            {' '}Editar Perfil
          </Go>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 bg-surface-container-lowest p-8 rounded-xl shadow-[-10px_0_40px_rgba(28,28,25,0.05)] flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-surface-container border-2 border-surface-container-low relative group">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A high-quality portrait photograph of a young Colombian man smiling warmly, shot in a well-lit modern kitchen. The lighting is soft and natural, casting gentle shadows. The color palette features deep roasted browns and creamy whites, reflecting the premium Paisabor brand identity. The image feels authentic, professional, and culinary." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCbGLxMuesiJnl4ri7vSA2tvM20pYlCM6GnzibUTu_CCeph19mRSQ9rRa-CshJikW7HdYPNVVff7wqlbEt29AUYUNoyq3weJHdEEZCLKpTd4ZwgJ-Ak0UWizPFhHwiPnUxll013DY8tT2wbWWgywMHn3SzJ7c1kae-31pC5i_adIksh92IF6W4pvVGhuzQTVCgFY7fYMqg_i5C0J-pOzDYvsq6NWUxGb96rN_7mWRVkiwg-wLhLE1x" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-on-primary">
                  photo_camera
                </span>
              </div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-1">
              Juan Pérez
            </h3>
            <p className="text-on-surface-variant font-medium mb-6">
              juan.perez@ejemplo.co
            </p>
            <div className="w-full border-t border-surface-variant my-4"></div>
            <div className="w-full flex justify-between items-center text-sm">
              <span className="text-on-surface-variant">
                Miembro desde
              </span>
              {' '}
              <span className="font-medium text-primary">
                Marzo 2023
              </span>
            </div>
            <div className="w-full flex justify-between items-center text-sm mt-3">
              <span className="text-on-surface-variant">
                Puntos Sabor
              </span>
              {' '}
              <span className="font-bold text-secondary">
                1,450
              </span>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 bg-surface-container-lowest rounded-xl shadow-[-10px_0_40px_rgba(28,28,25,0.05)] p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-2xl font-bold text-primary">
                Pedidos Recientes
              </h3>
              <Link className="text-secondary hover:text-secondary-container text-sm font-medium transition-colors flex items-center gap-1" href="/cuenta/pedidos">
                Ver todos{' '}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-surface-container-low p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-surface-container transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-highest shrink-0">
                    <img className="w-full h-full object-cover" data-alt="A close-up, beautifully styled macro shot of freshly roasted Colombian coffee beans resting in a rustic, handmade ceramic bowl. The lighting is dramatic, highlighting the oily sheen and rich, dark brown textures of the beans. The background is a soft, warm cream color, emphasizing a premium, artisanal culinary aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFdHfROPu7gMnpJN9toJ5oe9dscBypLKus8gTPOk6xDUyrDZYmjdyF2EpSg4DMXAev-cek2_t0wyolEPwZr0TsfZ4mQqkIvlUpm5E_D50KUnEPWU3WXD2DmXzNq41KzpU8Rdxgoagq1TWjZtE1La-MPz31X67sB5AvbVWKAD5LM3g7-IP2wVIOXBVB_sOxfV6sHOJDKbgOZrECXH3iaO6mvlMrqn_2aheINCI7ysgmGVwdFrq2_I6O" />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                      Café Excelso - Origen Tolima
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Pedido #4092 • 15 Oct, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0">
                  <span className="font-medium text-primary bg-tertiary-fixed/40 px-3 py-1 rounded-full text-xs text-on-tertiary-fixed mb-0 sm:mb-2 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    {' '}Enviado
                  </span>
                  {' '}
                  <span className="font-bold text-primary">
                    €24.50
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low p-5 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-surface-container transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-surface-container-highest shrink-0">
                    <img className="w-full h-full object-cover" data-alt="An editorial style flat lay image of golden, perfectly fried Colombian empanadas arranged on an earthy terracotta plate. The lighting creates soft, appetizing highlights on the crispy crusts. The scene includes a small ramekin of vibrant aji sauce, set against a pristine, textured white surface, evoking a high-end food magazine feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuilZeNdmihOAIR9sn7AeHJfj-nAZN439qtJaGij7218tdROWCjmqc6fKYe8Y0fccoiRy3LxpgmSFTJXNnfpCCTmSbGWY7LG-733vz7aGgzUYSlVlwvr9R8prqzPVsliULYqMQ2Z5f1Kd6o7NDTrsyVceIJs904PkWwE_9IyOWYb9u_wCaBldWaIp_wLi3-f0fpFmVFJegXbIaCHjehHflsYAMCTGAP6vQNqVJK0KfxBtuGbyqQ8Lt" />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-lg text-primary group-hover:text-secondary transition-colors">
                      Kit Empanadas Tradicionales
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      Pedido #4088 • 02 Oct, 2023
                    </p>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0">
                  <span className="font-medium text-primary bg-surface-variant px-3 py-1 rounded-full text-xs text-on-surface-variant mb-0 sm:mb-2 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-outline"></span>
                    {' '}Entregado
                  </span>
                  {' '}
                  <span className="font-bold text-primary">
                    €32.00
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="bg-surface-container p-8 rounded-xl shadow-xs border border-outline-variant/10 relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h4 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    location_on
                  </span>
                  {' '}Dirección Principal
                </h4>
                <button className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                </button>
              </div>
              <div className="relative z-10 text-on-surface-variant leading-relaxed">
                <p className="font-medium text-primary mb-1">
                  Juan Pérez
                </p>
                <p>
                  Prinsengracht 263-267
                </p>
                <p>
                  1016 GV Amsterdam
                </p>
                <p>
                  Países Bajos
                </p>
                <p className="mt-4 text-sm">
                  <span className="font-medium">
                    Tel:
                  </span>
                  {' '}+31 06 12345678
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl shadow-xs">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-headline text-xl font-bold text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    tune
                  </span>
                  {' '}Preferencias
                </h4>
                <button className="text-on-surface-variant hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-sm">
                    edit
                  </span>
                </button>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-on-surface-variant mb-3 uppercase tracking-wider">
                    Perfil de Sabor (Café)
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full text-sm font-medium">
                      Afrutado
                    </span>
                    {' '}
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1.5 rounded-full text-sm">
                      Cuerpo Medio
                    </span>
                    {' '}
                    <span className="bg-surface-variant text-on-surface-variant px-3 py-1.5 rounded-full text-sm">
                      Acidez Baja
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-on-surface-variant mb-3 uppercase tracking-wider">
                    Restricciones Dietéticas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1.5 rounded-full text-sm font-medium">
                      Sin Gluten
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
