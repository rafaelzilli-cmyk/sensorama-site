import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Sensorama | UX Research, Diseño de Servicios, Diseño de Producto y Transformación Digital',
  description: 'Sensorama es una consultoría de innovación que ayuda a las empresas a resolver problemas complejos a través de UX research, service design, product design y transformación digital.',
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      'pt-BR': SITE_URL,
      'en': `${SITE_URL}/en`,
      'es': `${SITE_URL}/es`,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    locale: 'es_ES',
  },
};

export default function HomePageES() {
  return <LandingPage lang="es" />;
}
