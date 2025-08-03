'use client';

import {
  formatDateRow,
  formatIDRow,
  formatSortHeader,
} from '@/utils/table-utils';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CollectiblesSettingsCols = {
  id: string;
  loginDays: number;
  indexIntervalDays: number;
  lastIndexDate: string;
};

export const columns: ColumnDef<CollectiblesSettingsCols>[] = [
  {
    accessorKey: 'loginDays',
    header: (column) => formatSortHeader({ column, label: 'Login Days' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'loginDays' }),
  },
  {
    accessorKey: 'indexIntervalDays',
    header: (column) =>
      formatSortHeader({ column, label: 'Index Interval Days' }),
  },
  {
    accessorKey: 'lastIndexDate',
    header: (column) => formatSortHeader({ column, label: 'Last Index Date' }),
    cell: (info) => formatDateRow({ row: info.row, col: 'lastIndexDate' }),
  },
];
