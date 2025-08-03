'use client';

import DataTable from '@/components/admin/data-table';
import { columns } from '@/components/admin/cooling-tank-tunnels/cooling-tank-tunnels-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { useRouter } from 'next/navigation';
import { deleteCoolingTankTunnel } from '@/services/cooling-tank-tunnels';

interface CoolingTankTunnelsTableProps {
  data: any;
}

const CoolingTankTunnelsTable = ({ data }: CoolingTankTunnelsTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteCoolingTankTunnel(id);
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
          editUrl: '/admin/cooling-tank-tunnels',
        }),
    },
  ];

  return <DataTable columns={columnsWithActions} data={data} />;
};

export default CoolingTankTunnelsTable;
