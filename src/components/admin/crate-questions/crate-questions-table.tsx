'use client';

import DataTable from '@/components/admin/data-table';
import { columns } from '@/components/admin/crate-questions/crate-questions-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { useRouter } from 'next/navigation';
import { deleteCrateQuestion } from '@/services/crate-questions';

interface CrystalDropOddsTableProps {
  data: any;
}

const CrystalDropOddsTable = ({ data }: CrystalDropOddsTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteCrateQuestion(id);
    if (success) {
      router.refresh();
    }
  }

  const columnsWithActions = [
    ...columns,
    {
      header: 'Actions',
      cell: (info: any) =>
        formatActionsRow({
          row: info.row,
          onDelete: handleDelete,
          editUrl: '/admin/crate-questions',
        }),
    },
  ];

  return <DataTable columns={columnsWithActions} data={data} />;
};

export default CrystalDropOddsTable;
