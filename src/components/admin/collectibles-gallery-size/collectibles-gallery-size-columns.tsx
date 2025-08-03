'use client';

import {
  formatIDRow,
  formatLongRow,
  formatSortHeader,
} from '@/utils/table-utils';
import { ColumnDef, Row } from '@tanstack/react-table';
import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CollectiblesGallerySizeCols = {
  id: string;
  capacity: number;
  cost: number;
};

export const columns: ColumnDef<CollectiblesGallerySizeCols>[] = [
  // {
  //   accessorKey: 'id',
  //   header: 'ID',
  //   cell: (info) => formatIDRow({ row: info.row, col: 'id' }),
  // },
  {
    accessorKey: 'capacity',
    header: (column) => formatSortHeader({ column, label: 'Capacity' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'capacity' }),
  },
  {
    accessorKey: 'cost',
    header: (column) => formatSortHeader({ column, label: 'Cost' }),
    cell: (info) => formatLongRow({ row: info.row, col: 'cost' }),
  },
];
