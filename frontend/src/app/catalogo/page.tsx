'use client';

import { DespensaView } from '@/features/catalog/DespensaView';
import { useAppState } from '@/app/providers';

export default function CatalogoPage() {
  const { products, handleAddToCart } = useAppState();

  return <DespensaView products={products} onAddToCart={handleAddToCart} />;
}
