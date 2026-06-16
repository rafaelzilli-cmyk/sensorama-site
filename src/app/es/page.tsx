import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'es',
  path: '',
  title: 'Sensorama Design | Investigación, UX y Diseño Estratégico',
  description:
    'Consultoría de diseño e investigación que conecta insights con impacto mensurable. Investigación de campo, UX, diseño estratégico e IA para resolver problemas reales.',
});

export default function HomePageES() {
  return <LandingPage lang="es" />;
}
