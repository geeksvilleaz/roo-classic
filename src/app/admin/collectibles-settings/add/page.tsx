import CollectiblesSettingsForm from '@/components/admin/collectibles-settings/collectibles-settings-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Collectibles Settings</h1>

      <CollectiblesSettingsForm />
    </div>
  );
};

export default page;
