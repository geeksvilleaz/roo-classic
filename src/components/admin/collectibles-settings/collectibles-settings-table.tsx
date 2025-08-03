'use client';

import DataTable from '@/components/admin/data-table';
import { columns } from '@/components/admin/collectibles-settings/collectibles-settings-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { useRouter } from 'next/navigation';
import { deleteCollectiblesSetting } from '@/services/collectibles-settings';

interface CollectiblesSettingsTableProps {
  data: any;
}

const CollectiblesSettingsTable = ({
  data,
}: CollectiblesSettingsTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteCollectiblesSetting(id);
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
          editUrl: '/admin/collectibles-settings',
        }),
    },
  ];

  return <DataTable columns={columnsWithActions} data={data} />;
};

export default CollectiblesSettingsTable;
