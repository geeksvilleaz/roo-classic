import CrateQuestionForm from '@/components/admin/crate-questions/crate-questions-form';
import { getCrateQuestionById } from '@/services/crate-questions';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { data } = await getCrateQuestionById(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-2xl">
      <CrateQuestionForm initialData={data} />
    </div>
  );
};

export default page;
