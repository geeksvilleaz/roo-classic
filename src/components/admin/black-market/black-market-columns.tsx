'use client';

import { Button } from '@/components/ui/button';
import { formatDateRow, formatIDRow, formatLongRow } from '@/utils/table-utils';
import { ColumnDef, Row } from '@tanstack/react-table';
import Link from 'next/link';
import { format } from 'path';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BlackMarketCols = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const columns: ColumnDef<BlackMarketCols>[] = [
  {
    accessorKey: 'alien',
    header: 'Alien',
    cell: (info) => formatIDRow({ row: info.row, col: 'alien' }),
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'introduction',
    header: 'Introduction',
    cell: (info) => formatLongRow({ row: info.row, col: 'introduction' }),
  },
  {
    accessorKey: 'barterScreen',
    header: 'Barter Screen',
    cell: (info) => formatLongRow({ row: info.row, col: 'barterScreen' }),
  },
  {
    accessorKey: 'bargainScreen',
    header: 'Bargain Screen',
    cell: (info) => formatLongRow({ row: info.row, col: 'bargainScreen' }),
  },
  {
    accessorKey: 'saleScreen',
    header: 'Sale Screen',
    cell: (info) => formatLongRow({ row: info.row, col: 'saleScreen' }),
  },
  {
    accessorKey: 'nextRestock',
    header: 'Next Restock',
    cell: (info) => formatDateRow({ row: info.row, col: 'nextRestock' }),
  },
];
