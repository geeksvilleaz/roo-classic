import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpDown } from 'lucide-react';

export function formatActionsRow({
  row,
  onDelete,
  editUrl = '',
}: {
  row: Row<any>;
  onDelete: any;
  editUrl?: string;
}) {
  const { id } = row.original;

  return (
    <>
      {editUrl && (
        <Button variant="outline" className="mr-2" asChild>
          <Link href={`${editUrl}/${id}`}>Edit</Link>
        </Button>
      )}
      <Button onClick={() => onDelete(id)} variant="destructive">
        Delete
      </Button>
    </>
  );
}

export function formatLongRow({ row, col }: { row: Row<any>; col: string }) {
  return <div className="w-30 truncate">{row.getValue(col) as string}</div>;
}

export function formatDateRow({ row, col }: { row: Row<any>; col: string }) {
  return (
    <div className="w-30 truncate">
      {new Date(row.getValue(col) as string).toLocaleDateString()}
      <br />
      {new Date(row.getValue(col) as string).toLocaleTimeString()}
    </div>
  );
}

export function formatIDRow({ row, col }: { row: Row<any>; col: string }) {
  const { id } = row.original as any;

  return (
    <div className="w-30 truncate">
      <Link href={`/admin/black-market/${id}`}>
        {row.getValue(col) as string}
      </Link>
    </div>
  );
}

export function formatSortHeader({
  column,
  label,
}: {
  column: any;
  label: string;
}) {
  return (
    <Button
      variant="ghost"
      onClick={() =>
        column.column.toggleSorting(column.column.getIsSorted() === 'asc')
      }
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
}
