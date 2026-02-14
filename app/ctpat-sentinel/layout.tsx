import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'C-TPAT Sentinel - Strategic Dossier',
  description: 'Technical and financial blueprint for BI-0153: Autonomous Border Compliance Infrastructure.',
};

export default function CtpatSentinelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}