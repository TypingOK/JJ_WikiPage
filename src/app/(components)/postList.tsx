"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import PageListPagination from "./pagination";
import DataTable from "./dataTable";
import { columns } from "./columns";

const MainPostList = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { data } = useQuery({
    queryKey: ["/api/posts", page ? parseInt(page) : 1],
    queryFn: async () => {
      const response = (
        await fetch(`http://localhost:3000/api/posts?page=${page ? page : 1}`)
      ).json();
      return response;
    },
  });

  if (data) {
    const intPage = page ? parseInt(page) : 1;

    return (
      <div className="w-full flex flex-col items-center">
        <div className="ml-auto">
          <Link href={`/write`}>글쓰기</Link>
        </div>
        <DataTable columns={columns} data={data.posts} />
        {/* <div>
          {data.posts.map(
            (e: { title: string; content: string; id: number }) => (
              <div key={e.id}>
                <Link href={`/${e.title}`}>{e.title}</Link>
              </div>
            )
          )}
        </div> */}
        <div className="flex">
          <PageListPagination page={intPage} lastPage={data.endPage} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MainPostList;
