import BlackMarketForm from '@/components/admin/black-market/black-market-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Black Market</h1>

      <BlackMarketForm />
    </div>
  );
};

export default page;
