import CoolingTankTunnelsTable from '@/components/admin/cooling-tank-tunnels/cooling-tank-tunnels-table';
import { getCoolingTankTunnels } from '@/services/cooling-tank-tunnels';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getCoolingTankTunnels();

  return (
    <div className="">
      <h1>Cooling Tank Tunnels</h1>

      <CoolingTankTunnelsTable data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
