import BlackMarketTable from '@/components/admin/black-market/black-market-table';
import CollectiblesGallerySizeTable from '@/components/admin/collectibles-gallery-size/collectibles-gallery-size-table';
import { getCollectiblesGallerySizes } from '@/services/collectibles-gallery-size';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getCollectiblesGallerySizes();

  const sortedByCapacity = data.sort(
    (a, b) => (a?.capacity || 0) - (b?.capacity || 0),
  );

  return (
    <div className="">
      <h1>Collectibles Gallery Sizes</h1>

      <CollectiblesGallerySizeTable data={sortedByCapacity} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
