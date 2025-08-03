import BlackMarketForm from '@/components/admin/black-market/black-market-form';
import CollectiblesGallerySizeForm from '@/components/admin/collectibles-gallery-size/collectibles-gallery-size-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Collectibles Gallery Sizes</h1>

      <CollectiblesGallerySizeForm />
    </div>
  );
};

export default page;
