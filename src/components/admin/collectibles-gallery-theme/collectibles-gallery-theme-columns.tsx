'use client';

import { formatIDRow, formatSortHeader } from '@/utils/table-utils';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CollectiblesGalleryThemeCols = {
  id: string;
  name: string;
};

export const columns: ColumnDef<CollectiblesGalleryThemeCols>[] = [
  {
    accessorKey: 'name',
    header: (column) => formatSortHeader({ column, label: 'Name' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'name' }),
  },
];
