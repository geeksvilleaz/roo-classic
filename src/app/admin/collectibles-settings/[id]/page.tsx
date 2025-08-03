import CollectiblesGalleryThemeForm from '@/components/admin/collectibles-gallery-theme/collectibles-gallery-theme-form';
import CollectiblesSettingsForm from '@/components/admin/collectibles-settings/collectibles-settings-form';
import { getCollectiblesGalleryThemeById } from '@/services/collectibles-gallery-theme';
import { getCollectiblesSettingById } from '@/services/collectibles-settings';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getCollectiblesSettingById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <CollectiblesSettingsForm initialData={data} />
    </div>
  );
};

export default page;
