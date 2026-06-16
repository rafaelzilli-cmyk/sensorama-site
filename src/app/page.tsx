import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sensorama | UX Research, Service Design, Product Design & Digital Transformation',
  description: 'Sensorama is an innovation consultancy helping companies solve complex problems through UX research, service design, product design, and digital transformation.',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'pt-BR': SITE_URL,
      'en': `${SITE_URL}/en`,
      'es': `${SITE_URL}/es`,
      'x-default': SITE_URL,
    },
  },
};

export default function HomePagePT() {
  return <LandingPage lang="pt" />;
}
