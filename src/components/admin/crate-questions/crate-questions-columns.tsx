'use client';

import { formatLongRow, formatSortHeader } from '@/utils/table-utils';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CrystalDropOddsCols = {
  id: string;
  question: string;
  questionCode: string;
  answer: string;
};

export const columns: ColumnDef<CrystalDropOddsCols>[] = [
  {
    accessorKey: 'question',
    header: (column) => formatSortHeader({ column, label: 'Question' }),
    cell: (info) => formatLongRow({ row: info.row, col: 'question' }),
  },
  {
    accessorKey: 'questionCode',
    header: (column) => formatSortHeader({ column, label: 'Question Code' }),
  },
  {
    accessorKey: 'answer',
    header: (column) => formatSortHeader({ column, label: 'Answer' }),
  },
];
