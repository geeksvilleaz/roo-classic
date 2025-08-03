import CrystalDropOddsForm from '@/components/admin/crystal-drop-odds/crystal-drop-odds-form';
import { getCrystalDropOddById } from '@/services/crystal-drop-odds';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getCrystalDropOddById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <CrystalDropOddsForm initialData={data} />
    </div>
  );
};

export default page;
