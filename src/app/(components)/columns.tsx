"use client";
import { ColumnDef } from "@tanstack/react-table";

export interface TableItem {
  id: number;
  title: string;
}

export const columns: ColumnDef<TableItem>[] = [
  {
    accessorKey: "id",
    header: "글 번호",
  },
  {
    accessorKey: "title",
    header: "제목",
  },
];
