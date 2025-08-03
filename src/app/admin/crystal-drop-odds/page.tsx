import CrystalDropOddsTable from '@/components/admin/crystal-drop-odds/crystal-drop-odds-table';
import { getCrystalDropOdds } from '@/services/crystal-drop-odds';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getCrystalDropOdds();

  return (
    <div className="">
      <h1>Crystal Drop Odds</h1>

      <CrystalDropOddsTable data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
