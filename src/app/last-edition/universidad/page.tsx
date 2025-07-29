import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function EdicionPage() {
  const filePath = path.join(process.cwd(), 'public', 'ediciones', 'edicion1', 'estudiantil', 'nota.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-base2/50 to-base2/100 p-8 '>
      <div className='flex flex-col items-center justify-center mx-auto'>
        <h1 className='w-7xl text-justify mb-4 '>{data.title}</h1>
      </div>
      <p className='w-3xl text-sm text-gray-500 mb-2'>Publicado el {data.publishedAt}</p>
      <div className='flex flex-col items-center justify-center mx-auto'>
        <div className='prose prose-lg w-3xl text-justify' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
