import CoolingTankTunnelForm from '@/components/admin/cooling-tank-tunnels/cooling-tank-tunnels-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Cooling Tank Tunnel</h1>

      <CoolingTankTunnelForm />
    </div>
  );
};

export default page;
