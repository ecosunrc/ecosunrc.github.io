import { editionsData } from '@/data/editionsData';
import { sectionsData } from '@/data/sectionsData';
import { notFound } from 'next/navigation';
import SectionByEditionClient from './SectionByEdition';

type Props = {
  params: Promise<{
    edition: string;
    section: string;
  }>;
};

export default async function SectionByEditionPage({ params }: Props) {
  const editionNumber = Number((await params).edition);
  if (isNaN(editionNumber)) {
    notFound();
  }
  const editionData = editionsData[editionNumber];
  const sectionData = sectionsData[(await params).section as keyof typeof sectionsData];

  if (!editionData || !sectionData) {
    notFound();
  }

  return <SectionByEditionClient editionData={editionData} sectionData={sectionData} />;
}

export async function generateStaticParams() {
  const editions = Object.keys(editionsData);
  const sections = Object.keys(sectionsData);

  return editions.flatMap((edition) =>
    sections.map((section) => ({
      edition,
      section,
    }))
  );
}
