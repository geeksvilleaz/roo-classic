'use client';

import DataTable from '@/components/admin/data-table';
import {
  BlackMarketCols,
  columns,
} from '@/components/admin/black-market/black-market-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { deleteBlackMarket } from '@/services/black-market';
import { useRouter } from 'next/navigation';

interface BlackMarketTableProps {
  data: any;
}

const BlackMarketTable = ({ data }: BlackMarketTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteBlackMarket(id);
    if (success) {
      router.refresh();
    }
  }

  const columnsWithActions = [
    ...columns,
    {
      header: 'Actions',
      cell: (info: any) =>
        formatActionsRow({ row: info.row, onDelete: handleDelete }),
    },
  ];
  return <DataTable columns={columnsWithActions} data={data} />;
};

export default BlackMarketTable;
