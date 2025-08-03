import CollectiblesGalleryThemeForm from '@/components/admin/collectibles-gallery-theme/collectibles-gallery-theme-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Collectibles Gallery Themes</h1>

      <CollectiblesGalleryThemeForm />
    </div>
  );
};

export default page;
