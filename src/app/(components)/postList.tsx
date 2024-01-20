"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

const MainPostList = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["/api/posts", page ? parseInt(page) : 1],
    queryFn: async () => {
      const response = (
        await fetch(`http://localhost:3000/api/posts?page=${page ? page : 1}`)
      ).json();
      return response;
    },
  });

  if (data) {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="ml-auto">
          <Link href={`/write`}>글쓰기</Link>
        </div>
        <div>
          {data.posts.map(
            (e: { title: string; content: string; id: number }) => (
              <div key={e.id}>
                <Link href={`/${e.title}`}>{e.title}</Link>
              </div>
            )
          )}
        </div>
        <div className="flex">
          <div className="flex h-full items-center">
            <button
              onClick={() => {
                router.push(`?page=${1}`);
              }}
              className="mr-2 text-[16px]"
            >{`<<`}</button>
            <button
              onClick={() => {
                if (page) {
                  const intPage = parseInt(page);
                  if (intPage - 1 > 1) {
                    router.push(`?page=${parseInt(page) - 1}`);
                  } else {
                    router.push(`?page=${1}`);
                  }
                }
              }}
              className="mr-2 text-[16px]"
            >{`<`}</button>
          </div>
          {Array.from({ length: data.endPage }, (_, index) => (
            <button
              onClick={() => {
                router.push(`?page=${index + 1}`);
              }}
              key={index}
              className={`mr-2 w-11 flex h-11 justify-center items-center text-[16px]font-medium  ${
                index + 1 === data.page ? `` : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
          <div className="flex h-full items-center">
            <button
              onClick={() => {
                if (page) {
                  const intPage = parseInt(page);
                  if (intPage + 1 >= data.endPage) {
                    router.push(`?page=${data.endPage}`);
                  } else {
                    router.push(`?page=${intPage + 1}`);
                  }
                }
              }}
              className="ml-2 text-[16px]"
            >{`>`}</button>
            <button
              onClick={() => {
                router.push(`?page=${data.endPage}`);
              }}
              className="ml-2 text-[16px]"
            >{`>>`}</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MainPostList;
