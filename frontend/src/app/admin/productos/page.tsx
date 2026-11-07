// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/panel_de_administraci_n_paisabor
/* eslint-disable @next/next/no-img-element */
import { Go } from '@/components/ui/Go';

export default function AdminProductosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: "@layer base {\n.soil-shadow { box-shadow: -10px 0 40px rgba(28,28,25,0.05); }\n.card-ambient-shadow { box-shadow: 0 4px 40px rgba(28,28,25,0.05); }\n}" }} />
    <div className="h-full flex font-body text-on-surface">
      <main className="flex-1 bg-background min-h-screen pt-16">
        <header className="md:hidden flex items-center justify-between p-4 bg-surface-container-low border-b border-outline-variant/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-highest">
              <img alt="Admin Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASXXzS7wZRNzeBNNHqN7qcDdA3Zp_sNSMoNA8ypBivsLGE7ZgjSDn24xMReorxinZptz3Luv_CAaZRI0Fi8lURC7jJ8-xMif435JUBqAWO1cFxclHt2PbSq6riCgvCYtnqGXwCiz2xWOM-LXFB16GwZPwGcfJGAspEMsAUamHOBp1Kfnbr7D6nwMnJotK9wSkMzDWcx7Gs0fINyKD5uvAzyc9RxY82jwQ-1jof-3MJAbV8kiLzfRvYN6GmJglWIlRktg" />
            </div>
            <h1 className="font-headline font-bold text-lg text-primary">
              Products
            </h1>
          </div>
          <button className="text-on-surface-variant">
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
        </header>
        <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12">
          <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-display-sm tracking-tight text-primary leading-none mb-2">
                Products Inventory
              </h1>
              <p className="text-on-surface-variant font-body text-lg max-w-xl">
                Gestión de Productos. Manage your coffee beans, brewing equipment, and merchandise.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-lowest rounded-xl p-4 pr-8 card-ambient-shadow">
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                  Total Ventas
                </p>
                <p className="font-headline text-2xl font-bold text-primary">
                  €4,250
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 pr-8 card-ambient-shadow">
                <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                  Productos Activos
                </p>
                <p className="font-headline text-2xl font-bold text-primary">
                  24
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-surface-container-lowest p-2 rounded-xl card-ambient-shadow">
            <div className="relative w-full sm:w-96 flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50">
                search
              </span>
              {' '}
              <input className="form-input w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 pl-12 pr-4 py-3 font-body text-on-surface transition-colors placeholder:text-on-surface-variant/50" placeholder="Buscar productos..." type="text" />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>
                {' '}Filtros
              </button>
              {' '}
              <Go href="/admin/productos/nuevo" className="md:hidden flex-1 bg-primary text-on-primary rounded-lg py-2 px-4 font-medium transition-all hover:bg-primary-container">
                Nuevo
              </Go>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-surface-container-low rounded-xl overflow-hidden group">
              <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                <img className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" data-alt="A meticulously lit close-up of a rustic burlap sack filled with premium, glossy dark-roast coffee beans. The lighting is warm and directional, emphasizing the texture of the beans against a soft, cream-colored background in a high-end editorial culinary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2UwTsWqLOj9NaCSpmUZCgke3USMEg9lSqz35QxSzsSwS47F9pssO5HGQ1qNToTZBormzip3VcWraV0WLonvs6l9KtbLFouyRYKm8e7ZEq6BNlaHQVGfZfq9n5-1SbvbvvZR7bdhfxYaWqgFQ-gbeRc6OZj_puIFxIRoBuyAxPWRCWR1USWICdBhSn6RMd5adw_Y27CoA10Baykl_Rwuv8KvzcK7ePjkiQphSVE8yhuci1ZuQjsS6A" />
                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Grano Entero
                </div>
              </div>
              <div className="bg-surface p-6 flex flex-col justify-between h-48">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Sierra Nevada Dark Roast
                    </h3>
                    <span className="font-body font-medium text-secondary">
                      €18.50
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Notas de cacao oscuro, panela y nuez tostada. Cosechado a 1500m.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t border-outline-variant/20">
                  <span className="text-xs text-on-surface-variant">
                    Stock: 45
                  </span>
                  <div className="flex gap-2">
                    <button className="text-on-surface-variant hover:text-primary transition-colors" title="Editar">
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    {' '}
                    <button className="text-error/70 hover:text-error transition-colors" title="Eliminar">
                      <span className="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="bg-surface-container-low rounded-xl overflow-hidden group">
              <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                <img className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" data-alt="A high-end editorial photo of a sleek, minimalist ceramic coffee pour-over set resting on a raw wooden table. The lighting is soft and diffused, creating a serene, modern light-mode aesthetic with warm earthy accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2hBNEaQ88xm5LorgUgRERrrjgSGp9_OE5HncJ4PAVjC19r5rDfjuffrAIu2O7E497H2VIami7xy7gYsOddb-Xx3hw73BpC-wKRGRM9lPG73hByLySZUfmsGZnvAX9CZ3Y5Wbxi_UZmzvolFJ_9tLr5L2Wop2ov2wC_2NQAbbHDR2_7AXLjSi5P4isGk3DMO9UOfOnqyAzIEy3GbSoqpSuFCwzfgz_kRRK56I9ZwHkmoE4eR24TxnK" />
                <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Equipo
                </div>
              </div>
              <div className="bg-surface p-6 flex flex-col justify-between h-48">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Set V60 Cerámica
                    </h3>
                    <span className="font-body font-medium text-secondary">
                      €45.00
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Kit completo de preparación manual. Incluye cono, jarra y filtros.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t border-outline-variant/20">
                  <span className="text-xs text-error font-medium">
                    Stock: 2 (Bajo)
                  </span>
                  <div className="flex gap-2">
                    <button className="text-on-surface-variant hover:text-primary transition-colors" title="Editar">
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    {' '}
                    <button className="text-error/70 hover:text-error transition-colors" title="Eliminar">
                      <span className="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="bg-surface-container-low rounded-xl overflow-hidden group">
              <div className="h-48 bg-surface-container-highest relative overflow-hidden">
                <img className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" data-alt="A beautifully styled shot of a rustic, artisan-crafted jar of Colombian panela syrup next to a small wooden spoon. The scene is warmly lit, evoking a premium, traditional hacienda kitchen feel against a pristine clotted cream surface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSe1I5h5oASBR53jCmYF0nh0ZfIstNse1jlXkm54hp_5hFSnQ1ly0lXqMdmy6AFFtxkjOQhriPI4R2tlAtO_5wAKNjm781TIYtZEBweX3D1DVrTy8vS9payRBdcqYW9V5xJut6BjaLai4X70k4wsPFO2O_sQoG8ATShPFLmvuQtIF3RdOJVowBgYo0KXohfhX7OJjomQe5wme6NYkY4U0wV11xRKM7nRWH6tWiHQFEGf_pyrwtZLpe" />
                <div className="absolute top-4 left-4 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Despensa
                </div>
              </div>
              <div className="bg-surface p-6 flex flex-col justify-between h-48">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-headline font-bold text-xl text-primary">
                      Miel de Panela Artesanal
                    </h3>
                    <span className="font-body font-medium text-secondary">
                      €12.00
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    Endulzante natural colombiano, perfecto para café y repostería.
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 mt-4 border-t border-outline-variant/20">
                  <span className="text-xs text-on-surface-variant">
                    Stock: 18
                  </span>
                  <div className="flex gap-2">
                    <button className="text-on-surface-variant hover:text-primary transition-colors" title="Editar">
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                    </button>
                    {' '}
                    <button className="text-error/70 hover:text-error transition-colors" title="Eliminar">
                      <span className="material-symbols-outlined text-[20px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
    </>
  );
}
