// Generado por scripts/stitch-to-next.mjs desde docs/diseno-stitch/pantallas/men_de_productos_completo
/* eslint-disable @next/next/no-img-element */
import { Go } from '@/components/ui/Go';

export default function ProductosPage() {
  return (
    <>
    <div className="bg-background text-on-background font-body antialiased selection:bg-secondary selection:text-on-secondary min-h-screen flex flex-col">
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <section className="mb-20 animate-fade-in-up">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-6">
              Sabor Auténtico.{' '}
              <br />
              {' '}
              <span className="text-secondary">
                En tu mesa.
              </span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Descubre nuestra selección de productos colombianos artesanales. Desde el calor del trópico hasta los Países Bajos, curados para ti.
            </p>
          </div>
        </section>
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10 border-b border-surface-dim pb-4">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Panadería
            </h2>
            <span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">
              Amasijos frescos
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="group bg-surface rounded-lg overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2" style={{ boxShadow: "0 10px 40px -10px rgba(28, 28, 25, 0.05)" }}>
              <div className="relative bg-surface-container-low aspect-[4/3] overflow-hidden">
                <img alt="Pandebonos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A close-up, high-quality photograph of warm, golden-brown Pandebonos (Colombian cheese bread) resting on a rustic wooden board. The lighting is soft and warm, reminiscent of morning sunlight in a cozy kitchen, casting gentle shadows. The background is slightly out of focus, highlighting the crusty exterior and soft interior of the bread. Shot in a premium, editorial culinary style with deep coffee brown and warm terracotta tones accenting the scene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKvCw0Jdvg1-kxiZIid6k3UndAvXNe7kojNqUujmPI1iCp3c5ZKgYaeS6PajLbjRM_3lfO0rVEiGJxQMex7b38V33ozg_P6UzpChxrERtB-vfjORWJuh-LdkjALsPoo8QppYu_QQBL6bMQ3LDEu_x5n11Pz4DQ52-YEitPbA7vADFJP0wHhV0sCR-k5d7QK4xqkuE8eu6qT0sXYnck3b8OTrS-20pwmUcnylq7CFwree0keWzjvbIy" />
                <div className="absolute top-4 left-4">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed font-label text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Recién Horneado
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-surface">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-xl text-primary">
                    Pandebonos
                  </h3>
                  <span className="font-headline font-bold text-lg text-secondary">
                    €6.50
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-6 flex-grow">
                  Panecillos de queso y almidón de yuca, suaves por dentro y crujientes por fuera. Paquete de 6 unidades.
                </p>
                <Go href="/carrito" className="w-full bg-primary text-on-primary font-label font-medium rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-300 shadow-[0_4px_14px_0_rgba(51,33,13,0.15)] group/btn">
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/btn:scale-110">
                    add_shopping_cart
                  </span>
                  {' '}Añadir al Carrito
                </Go>
              </div>
            </article>
            <article className="group bg-surface rounded-lg overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2" style={{ boxShadow: "0 10px 40px -10px rgba(28, 28, 25, 0.05)" }}>
              <div className="relative bg-surface-container-low aspect-[4/3] overflow-hidden">
                <img alt="Almojábanas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A high-end editorial shot of freshly baked Almojábanas (Colombian corn and cheese rolls) presented on a dark slate plate. The warm, soft texture of the bread contrasts beautifully with the dark background. Subtle wisps of steam rise from the rolls, indicating they are fresh from the oven. The lighting is cinematic, employing deep rich browns and soft terracotta accents, creating a cozy, artisanal bakery atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkAv4mCNvQxLKi8w6hJyRe4B4lGWL1jUM3utt5qq0A2vshWqYwrD4Oi-jAcP5lGZbDPoI0TscJzls2FbnYLAyX4Gj4QkNsGevugiQiD_uKIJu1yfybMstZTYD48_PTrL2O0NkJws7fimNWZNoS2LbGlmrG-F3SHi21HJxN8RAuesFQAsKmCblJMreOPHhmrBiNnF-2gjIWDJSNnUobfulqtx_bVF7_c-HC9Rf0Xtt5vkrFFTcHn-W6" />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-surface">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-xl text-primary">
                    Almojábanas
                  </h3>
                  <span className="font-headline font-bold text-lg text-secondary">
                    €6.00
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-6 flex-grow">
                  Deliciosos panecillos a base de harina de maíz y cuajada fresca. Ideales para el desayuno. Paquete de 6 unidades.
                </p>
                <Go href="/carrito" className="w-full bg-primary text-on-primary font-label font-medium rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-300 shadow-[0_4px_14px_0_rgba(51,33,13,0.15)] group/btn">
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/btn:scale-110">
                    add_shopping_cart
                  </span>
                  {' '}Añadir al Carrito
                </Go>
              </div>
            </article>
          </div>
        </section>
        <section className="mb-24">
          <div className="flex items-center justify-between mb-10 border-b border-surface-dim pb-4">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary tracking-tight">
              Café de Origen
            </h2>
            <span className="font-label text-sm text-on-surface-variant uppercase tracking-widest">
              Grano seleccionado
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <article className="group bg-surface rounded-lg overflow-hidden flex flex-col md:flex-row transition-transform duration-500 hover:-translate-y-2 col-span-1 md:col-span-2" style={{ boxShadow: "0 10px 40px -10px rgba(28, 28, 25, 0.05)" }}>
              <div className="relative bg-surface-container-low md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img alt="Café Especial Huila" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A premium, styled photograph of whole coffee beans spilling from a rustic burlap sack next to a beautifully designed bag of 'Café Especial Huila'. The scene is set on a dark, textured wooden table illuminated by moody, directional lighting that casts long, dramatic shadows. The color palette emphasizes deep roasted browns, rich mahogany, and subtle terracotta highlights, evoking a luxurious, artisanal coffee roastery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDU_HhYREJ77PfBH8YxHlz9K-5w3-9WHoRLMNr5vLq6IwiT84GLEUdXJNkwBag94geQrjpFpity777xSM7cA4AHpTNEoVwe8vavO7wSuGWP-1xfCCBfZDo8VpkBDa5CmuHl5DBz78RivnVEIphSZn9UfMnv4DlShWkDYrLhEfmjH_RqZiPo4TaBaezXr7CYaRGVCA6aNE6ahAcj_ieaYAvl06Mwbpb1rwi8u6tCCD6uN816ouAQI5z" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-secondary text-on-secondary font-label text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Premium
                  </span>
                  {' '}
                  <span className="bg-surface/90 text-primary font-label text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-xs backdrop-blur-xs">
                    Tueste Medio
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center bg-surface md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline font-bold text-3xl text-primary">
                    Café Especial Huila
                  </h3>
                  <span className="font-headline font-bold text-2xl text-secondary">
                    €14.90
                  </span>
                </div>
                <div className="flex gap-2 mb-6">
                  <span className="bg-surface-container-high text-on-surface-variant font-label text-xs px-2 py-1 rounded-sm">
                    Notas: Chocolate Oscuro
                  </span>
                  {' '}
                  <span className="bg-surface-container-high text-on-surface-variant font-label text-xs px-2 py-1 rounded-sm">
                    Acidez: Cítrica
                  </span>
                </div>
                <p className="font-body text-base text-on-surface-variant mb-8 flex-grow">
                  Cultivado a 1.700 metros sobre el nivel del mar en las montañas del sur de Colombia. Un perfil de taza balanceado con cuerpo cremoso y un postgusto prolongado y dulce. 250g.
                </p>
                <div className="flex gap-4">
                  <Go href="/carrito" className="flex-grow bg-primary text-on-primary font-label font-medium rounded-lg py-3 px-6 flex items-center justify-center gap-2 hover:bg-primary-container transition-colors duration-300 shadow-[0_4px_14px_0_rgba(51,33,13,0.15)]">
                    <span className="material-symbols-outlined text-[20px]">
                      add_shopping_cart
                    </span>
                    {' '}Añadir al Carrito
                  </Go>
                  {' '}
                  <button aria-label="Ver detalles" className="bg-transparent border-2 border-outline-variant text-primary font-label font-medium rounded-lg p-3 hover:border-secondary hover:text-secondary transition-colors duration-300">
                    <span className="material-symbols-outlined">
                      info
                    </span>
                  </button>
                </div>
              </div>
            </article>
            <article className="group bg-surface rounded-lg overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2" style={{ boxShadow: "0 10px 40px -10px rgba(28, 28, 25, 0.05)" }}>
              <div className="relative bg-surface-container-low aspect-[4/3] overflow-hidden">
                <img alt="Café Quindío" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A stylish, moody photograph focusing on a pour-over coffee setup with a bag of 'Café Quindío' in the background. Hot water is being poured over fresh grounds, creating a rich, dark bloom. The lighting is focused and warm, highlighting the amber tones of the coffee liquid and the deep earthy browns of the surroundings. The aesthetic is clean, modern, yet deeply rooted in artisanal coffee culture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCePQ5WVm7-ouydcpBt9b1jv64PIqsQd--a2pp_nSQGKjyoN_rnvCEywRh7u_kjLLsfb6PAV0Fy8FCaUl0X7PWuu4evVKxI9NSSsbXmMBRkzWgFi5ZD_G6QHiYrl2ylPMiUWAcS5G1j1uv58NC0iLXDjNvNBAMfTy51EvrZzewfIFqWducu_M-C6fz26n9QzJWZF0HN8A3T2RGumac1JfMNLVDtjBUMnJ0lVr_qPDSBUGkx7khqkNL4" />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-surface">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-xl text-primary">
                    Café Tradición Quindío
                  </h3>
                  <span className="font-headline font-bold text-lg text-secondary">
                    €12.50
                  </span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-surface-container-high text-on-surface-variant font-label text-xs px-2 py-1 rounded-sm">
                    Notas: Panela
                  </span>
                  {' '}
                  <span className="bg-surface-container-high text-on-surface-variant font-label text-xs px-2 py-1 rounded-sm">
                    Tueste: Oscuro
                  </span>
                </div>
                <p className="font-body text-sm text-on-surface-variant mb-6 flex-grow">
                  El clásico sabor del eje cafetero. Notas intensas a caramelo y frutos rojos. Ideal para espresso o moka. 250g.
                </p>
                <Go href="/carrito" className="w-full bg-transparent border-2 border-primary text-primary font-label font-medium rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-colors duration-300 group/btn">
                  <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover/btn:scale-110">
                    add_shopping_cart
                  </span>
                  {' '}Añadir al Carrito
                </Go>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
