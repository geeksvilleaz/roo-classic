'use client';

import DataTable from '@/components/admin/data-table';
import { columns } from '@/components/admin/crystal-drop-odds/crystal-drop-odds-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { useRouter } from 'next/navigation';
import { deleteCrystalDropOdd } from '@/services/crystal-drop-odds';

interface CrystalDropOddsTableProps {
  data: any;
}

const CrystalDropOddsTable = ({ data }: CrystalDropOddsTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteCrystalDropOdd(id);
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
          editUrl: '/admin/crystal-drop-odds',
        }),
    },
  ];

  return <DataTable columns={columnsWithActions} data={data} />;
};

export default CrystalDropOddsTable;
