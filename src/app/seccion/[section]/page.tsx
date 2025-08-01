import { notFound } from 'next/navigation';
import { sectionsData } from '@/data/sectionsData';
import SectionClient from './Section';

type Props = {
  params: Promise<{
    section: string;
  }>;
};

export default async function SectionPage({ params }: Props) {
  const sectionData = sectionsData[(await params).section as keyof typeof sectionsData];

  if (!sectionData) {
    notFound();
  }

  return <SectionClient sectionData={sectionData} />;
}

export async function generateStaticParams() {
  return Object.keys(sectionsData).map((section) => ({
    section,
  }));
}
