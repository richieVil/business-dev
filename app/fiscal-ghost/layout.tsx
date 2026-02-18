import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FISCAL GHOST - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for Project ID: BI-0163 (HTS Recovery Machine).',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
