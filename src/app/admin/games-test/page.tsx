import ReactGodot from '@/components/ReactGodot';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <div className="w-full h-screen">
      <ReactGodot
        basePath="/assets/games/test/"
        script="index.js"
        pck="index.pck"
        width={800}
        height={600}
        resize={true}
      />
    </div>
  );
};

export default page;
