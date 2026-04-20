import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Folix - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for Project ID: MV-001.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}