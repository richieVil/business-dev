import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vendor-Vision Shield - Strategic Dossier',
  description: 'Technical Blueprint and Commercial Logic for Project ID: BI-0063.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
