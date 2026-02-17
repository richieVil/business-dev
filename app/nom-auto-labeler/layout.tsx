import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NOM-Auto-Labeler - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for Project ID: BI-0001. Regulatory Indemnity Engine.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
