import CollectiblesGalleryThemeTable from '@/components/admin/collectibles-gallery-theme/collectibles-gallery-theme-table';
import { getCollectiblesGalleryThemes } from '@/services/collectibles-gallery-theme';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getCollectiblesGalleryThemes();

  const sortedByName = data.sort((a, b) =>
    (a?.name || '').localeCompare(b?.name || ''),
  );

  return (
    <div className="">
      <h1>Collectibles Gallery Themes</h1>

      <CollectiblesGalleryThemeTable data={sortedByName} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
