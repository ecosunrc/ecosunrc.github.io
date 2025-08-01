import { editionsData } from '@/data/editionsData';
import { notFound } from 'next/navigation';
import EdicionClient from './Edition';

type Props = {
  params: Promise<{
    edition: string;
  }>;
};
export default async function EdicionPage({ params }: Props) {
  const editionNumber = Number((await params).edition);
  if (isNaN(editionNumber)) {
    notFound();
  }
  const editionData = editionsData[editionNumber];

  if (!editionData) {
    notFound();
  }

  return <EdicionClient editionData={editionData} />;
}

export async function generateStaticParams() {
  return Object.keys(editionsData).map((edition) => ({
    edition,
  }));
}
