'use client';

import DataTable from '@/components/admin/data-table';
import { columns } from '@/components/admin/collectibles-gallery-theme/collectibles-gallery-theme-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { useRouter } from 'next/navigation';
import { deleteCollectiblesGalleryTheme } from '@/services/collectibles-gallery-theme';

interface CollectiblesGalleryThemeTableProps {
  data: any;
}

const CollectiblesGalleryThemeTable = ({
  data,
}: CollectiblesGalleryThemeTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteCollectiblesGalleryTheme(id);
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
          editUrl: '/admin/collectibles-gallery-themes',
        }),
    },
  ];

  return <DataTable columns={columnsWithActions} data={data} />;
};

export default CollectiblesGalleryThemeTable;
