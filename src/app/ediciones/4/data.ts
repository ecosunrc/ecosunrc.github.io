interface SectionData {
    section: string;
    title: string;
    lastImage: string;
    alt: string;
    className?: string;
    src: string;
}

export const sections: string[] = [
    'Estudiantil',
    'Local',
    'Nacional'
];

export const data: any = {
    date: 'Fecha de la edición',
    pdfPath: '/ediciones/4/revista.pdf',
    sections: sections
};

export const sectionsData: SectionData[] = [
    {
        section: 'Estudiantil',
        title: 'LA NUEVA UNIVERSIDAD ARGENTINA',
        lastImage: '/ediciones/4/sacau-1.webp',
        alt: 'Descripción de la sección Estudiantil',
        src: '/ediciones/4/estudiantil',
    },
    {
        section: 'Local',
        title: 'FERIA DEL LIBRO JUAN FILLOY',
        lastImage: '/ediciones/4/feria-3.webp',
        alt: 'Descripción de la sección Local',
        src: '/ediciones/4/local',
    },
    {
        section: 'Nacional',
        title: 'CIENCIA QUE ROMPE EL CASCARÓN',
        lastImage: '/ediciones/4/paleo-2.webp',
        alt: 'Descripción de la sección Nacional',
        src: '/ediciones/4/nacional',
    },
    {
        section: 'Universidad',
        title: 'La Perla: La UNRC hace historia',
        lastImage: '/ediciones/3/universidad-4.webp',
        alt: 'Descripción de la sección Universidad',
        src: '/ediciones/3/universidad',
    },
    {
        section: 'Suplemento',
        title: '¿Qué es ECOS?',
        lastImage: '/imagenes/logo/logo-square.svg',
        alt: 'Descripción de la sección Suplemento',
        className: 'object-contain object-center',
        src: '/ediciones/1/suplemento',
    },
];
