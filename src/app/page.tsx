import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'pt',
  path: '',
  title: 'Sensorama Design | Pesquisa, UX e Design Estratégico',
  description:
    'Consultoria de design e pesquisa que conecta insights ao impacto mensurável. Pesquisa de campo, UX, design estratégico e IA para resolver problemas reais de negócio.',
});

export default function HomePagePT() {
  return <LandingPage lang="pt" />;
}
