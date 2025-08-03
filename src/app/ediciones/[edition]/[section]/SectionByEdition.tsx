'use client';
import { EditionData } from '@/data/editionsData';
import { SectionData } from '@/data/sectionsData';
import NotaGeneric from '@/components/NotaGeneric';

export default function SectionByEditionClient({ editionData, sectionData }: { editionData: EditionData, sectionData: SectionData }) {
  return <NotaGeneric edition={editionData.number} section={sectionData.section} />
}
