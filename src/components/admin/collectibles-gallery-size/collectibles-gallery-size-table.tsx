'use client';

import DataTable from '@/components/admin/data-table';
import { columns } from '@/components/admin/collectibles-gallery-size/collectibles-gallery-size-columns';
import { formatActionsRow } from '@/utils/table-utils';
import { useRouter } from 'next/navigation';
import { deleteCollectiblesGallerySize } from '@/services/collectibles-gallery-size';

interface CollectiblesGallerySizeTableProps {
  data: any;
}

const CollectiblesGallerySizeTable = ({
  data,
}: CollectiblesGallerySizeTableProps) => {
  const router = useRouter();

  async function handleDelete(id: string) {
    const success = await deleteCollectiblesGallerySize(id);
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
          editUrl: '/admin/collectibles-gallery-sizes',
        }),
    },
  ];
  return <DataTable columns={columnsWithActions} data={data} />;
};

export default CollectiblesGallerySizeTable;
