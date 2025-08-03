'use client';

import { formatIDRow, formatSortHeader } from '@/utils/table-utils';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CrystalDropOddsCols = {
  id: string;
  crystal: string;
  probability: number;
  match2: number;
  match3: number;
  match4: number;
  currentProbability: number;
  dynamic: boolean;
};

export const columns: ColumnDef<CrystalDropOddsCols>[] = [
  {
    accessorKey: 'crystal',
    header: (column) => formatSortHeader({ column, label: 'Crystal' }),
  },
  {
    accessorKey: 'probability',
    header: (column) => formatSortHeader({ column, label: 'Probability' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'probability' }),
  },
  {
    accessorKey: 'match2',
    header: (column) => formatSortHeader({ column, label: 'Match 2' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'match2' }),
  },
  {
    accessorKey: 'match3',
    header: (column) => formatSortHeader({ column, label: 'Match 3' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'match3' }),
  },
  {
    accessorKey: 'match4',
    header: (column) => formatSortHeader({ column, label: 'Match 4' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'match4' }),
  },
  {
    accessorKey: 'currentProbability',
    header: (column) =>
      formatSortHeader({ column, label: 'Current Probability' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'currentProbability' }),
  },
  {
    accessorKey: 'dynamic',
    header: (column) => formatSortHeader({ column, label: 'Dynamic' }),
    cell: (info) => (info.row.original.dynamic ? 'Yes' : 'No'),
  },
];
