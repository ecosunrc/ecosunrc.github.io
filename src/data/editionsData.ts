interface EditionData {
  number: number;
  name: string;
  publishedAt: string;
  pdf: string;
}

export const editionsData: Record<number, EditionData> = {
  1: {
    number: 1,
    name: 'Primera Edición',
    publishedAt: '2025-08-11',
    pdf: '/ediciones/1/revista.pdf',
  },
  // 2: {
  //   number: 2,
  //   name: 'Segunda Edición',
  //   publishedAt: '2025-09-11',
  //   pdf: '/ediciones/2/revista.pdf',
  // },
};
