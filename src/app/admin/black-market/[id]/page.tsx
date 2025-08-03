import BlackMarketForm from '@/components/admin/black-market/black-market-form';
import { getBlackMarketById } from '@/services/black-market';
import { formatDateForForm } from '@/utils/date-utils';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getBlackMarketById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <BlackMarketForm initialData={data} />
    </div>
  );
};

export default page;
