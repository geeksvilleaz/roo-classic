import CollectiblesSettingsTable from '@/components/admin/collectibles-settings/collectibles-settings-table';
import { getCollectiblesSettings } from '@/services/collectibles-settings';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getCollectiblesSettings();

  return (
    <div className="">
      <h1>Collectibles Settings</h1>

      <CollectiblesSettingsTable data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
