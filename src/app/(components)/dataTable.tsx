"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const DataTable = ({ posts }: { posts: { id: number; title: string }[] }) => {
  return (
    <div className="rounded-md border md:w-2/3 w-full mb-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-32">글 번호</TableHead>
            <TableHead>글 제목</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <Link href={`/${post.title}`}>{post.id}</Link>
              </TableCell>
              <TableCell>
                <Link href={`/${post.title}`}>{post.title}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
