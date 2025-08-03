import CollectiblesGalleryThemeForm from '@/components/admin/collectibles-gallery-theme/collectibles-gallery-theme-form';
import { getCollectiblesGalleryThemeById } from '@/services/collectibles-gallery-theme';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getCollectiblesGalleryThemeById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <CollectiblesGalleryThemeForm initialData={data} />
    </div>
  );
};

export default page;
