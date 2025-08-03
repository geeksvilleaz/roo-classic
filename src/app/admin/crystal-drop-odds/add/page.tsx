import CrystalDropOddsForm from '@/components/admin/crystal-drop-odds/crystal-drop-odds-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Crystal Drop Odds</h1>

      <CrystalDropOddsForm />
    </div>
  );
};

export default page;
