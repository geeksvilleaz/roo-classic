'use client';

import { formatIDRow, formatSortHeader } from '@/utils/table-utils';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CoolingTankTunnelsCols = {
  id: string;
  tunnel: string;
  description: string;
  probability: number;
};

export const columns: ColumnDef<CoolingTankTunnelsCols>[] = [
  {
    accessorKey: 'tunnel',
    header: (column) => formatSortHeader({ column, label: 'Tunnel' }),
  },
  {
    accessorKey: 'description',
    header: (column) => formatSortHeader({ column, label: 'Description' }),
  },
  {
    accessorKey: 'probability',
    header: (column) => formatSortHeader({ column, label: 'Probability' }),
    cell: (info) => formatIDRow({ row: info.row, col: 'probability' }),
  },
];
