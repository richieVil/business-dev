import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Standard Work (BI-0003) - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for the Industrial Cortex - Project ID: BI-0003.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
