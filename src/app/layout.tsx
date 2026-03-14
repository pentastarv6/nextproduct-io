import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextProduct.io',
  description: 'Product Management & AI Consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
