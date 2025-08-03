import { JSX } from 'react';

interface ContentBlockProps {
  title: string;
  paragraphs: JSX.Element[];
  image: JSX.Element;
  direction: string;
}

const ContentBlock = ({
  image,
  title,
  paragraphs,
  direction,
}: ContentBlockProps) => {
  return (
    <div className="flex justify-center items-center bg-black text-white mb-4 border-1 border-x-blue-600 border-y-white">
      <div className="flex flex-row w-full gap-4 p-4">
        {direction === 'left' && <div className="flex-none">{image}</div>}

        <div>
          <h2 className="text-xl font-bold text-[#cff]">{title}</h2>
          {paragraphs.map((para, index) => (
            <div key={index} className="py-1">
              {para}
            </div>
          ))}
        </div>

        {direction === 'right' && <div className="flex-none">{image}</div>}
      </div>
    </div>
  );
};

export default ContentBlock;
