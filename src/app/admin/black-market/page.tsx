import BlackMarketTable from '@/components/admin/black-market/black-market-table';
import { getBlackMarkets } from '@/services/black-market';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getBlackMarkets();

  return (
    <div className="">
      <h1>Black Markets</h1>

      <BlackMarketTable data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
