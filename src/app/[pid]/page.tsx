import { pages } from '@/data/pages';
import ContentBlock from '@/components/content-block';

interface pageProps {
  params: Promise<{
    pid: string;
  }>;
}

const page = async ({ params }: pageProps) => {
  const { pid } = await params;

  const pageData: ROO.MarketingPageData = pages[pid];
  if (!pageData) {
    return <div className="page">Page not found</div>;
  }

  return (
    <div className="page flex flex-col items-center ">
      <div className="w-[1200px]">
        {pageData.sections.map((block, index) => (
          <ContentBlock
            key={index}
            title={block.title}
            paragraphs={block.paragraphs}
            image={block.image}
            direction={block.direction}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
