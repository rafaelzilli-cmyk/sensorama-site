import type { Metadata } from 'next';
import { LandingPage } from '@/components/LandingPage';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '',
  title: 'Sensorama Design | Research, UX and Strategic Design',
  description:
    'Design and research consultancy connecting insights to measurable impact. Field research, UX, strategic design and AI to solve real business problems.',
});

export default function HomePageEN() {
  return <LandingPage lang="en" />;
}
