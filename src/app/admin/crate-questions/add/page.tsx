import CrateQuestionForm from '@/components/admin/crate-questions/crate-questions-form';

interface PageProps {}

const page = ({}: PageProps) => {
  return (
    <div className="">
      <h1>Add Crate Question</h1>

      <CrateQuestionForm />
    </div>
  );
};

export default page;
