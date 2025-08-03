import BlackMarketForm from '@/components/admin/black-market/black-market-form';
import CollectiblesGallerySizeForm from '@/components/admin/collectibles-gallery-size/collectibles-gallery-size-form';
import { getBlackMarketById } from '@/services/black-market';
import { getCollectiblesGallerySizeById } from '@/services/collectibles-gallery-size';
import { formatDateForForm } from '@/utils/date-utils';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getCollectiblesGallerySizeById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <CollectiblesGallerySizeForm initialData={data} />
    </div>
  );
};

export default page;
