'use client';

import { SignaturesView } from '@/features/catalog/SignaturesView';
import { SIGNATURE_MENU } from '@/data/mockData';
import { useAppState } from '@/app/providers';

export default function FirmasPage() {
  const { handleAddToCart } = useAppState();

  return <SignaturesView menuItems={SIGNATURE_MENU} onAddToCart={handleAddToCart} />;
}
