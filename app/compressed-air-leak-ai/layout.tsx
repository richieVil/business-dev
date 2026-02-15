import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compressed Air Leak AI - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for Project ID: BI-0049.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
