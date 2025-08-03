import CoolingTankTunnelForm from '@/components/admin/cooling-tank-tunnels/cooling-tank-tunnels-form';
import { getCoolingTankTunnelById } from '@/services/cooling-tank-tunnels';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getCoolingTankTunnelById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <CoolingTankTunnelForm initialData={data} />
    </div>
  );
};

export default page;
