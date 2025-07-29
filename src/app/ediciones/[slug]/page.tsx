import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function EdicionPage() {
  const filePath = path.join(process.cwd(), 'public', 'ediciones', '1.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className='bg-gradient-to-b from-base2/50 to-base2/100 p-8 '>
      <div className='flex flex-col justify-center max-w-3xl mx-auto h-screen'>
        <iframe
          src='/ediciones/pdfs/edicion1.pdf#view=TwoPageView'
          className='w-full h-full mt-6'
          title={`PDF de ${data.title}`}
        />
        <p className='text-sm text-gray-500 mb-2'>Publicado el {data.publishedAt}</p>
        {data.pdf && (
          <a
          href={data.pdf}
          download
          className='mt-6 inline-block px-4 py-2 bg-base1 text-white rounded'
          >
            Descargar PDF
          </a>
        )}
      </div>
    </div>
  );
}
