"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import PageListPagination from "./pagination";
import DataTable from "./dataTable";
import { buttonVariants } from "@/components/ui/button";
import { PostList } from "@/types";

const MainPostList = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { data } = useQuery({
    queryKey: ["/api/posts", page ? parseInt(page) : 1],
    queryFn: async (): Promise<PostList> => {
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
        <div className="mb-7 w-full md:w-3/4 flex">
          <Link
            href={`/write`}
            className={`ml-auto ${buttonVariants({ variant: "outline" })}`}
          >
            글쓰기
          </Link>
        </div>
        <DataTable posts={data.posts} />
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
