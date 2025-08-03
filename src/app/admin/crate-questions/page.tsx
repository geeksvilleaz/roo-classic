import CrateQuestionsTable from '@/components/admin/crystal-drop-odds/crystal-drop-odds-table';
import { getCrateQuestions } from '@/services/crate-questions';

interface PageProps {}

const page = async ({}: PageProps) => {
  const { data } = await getCrateQuestions();

  return (
    <div className="">
      <h1>Crate Questions</h1>

      <CrateQuestionsTable data={data} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
};

export default page;
