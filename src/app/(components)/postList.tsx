"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

const MainPostList = () => {
  const [page, setPage] = useState(1);
  const { data } = useSuspenseQuery({
    queryKey: ["/api/posts", page],
    queryFn: async () => {
      const response = (
        await fetch(`http://localhost:3000/api/posts?page=${page}`)
      ).json();
      return response;
    },
  });

  if (data && data.posts) {
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
                setPage(1);
              }}
              className="mr-2 text-[16px]"
            >{`<<`}</button>
            <button
              onClick={() => {
                if (page - 1 > 1) {
                  setPage(page - 1);
                } else {
                  setPage(1);
                }
              }}
              className="mr-2 text-[16px]"
            >{`<`}</button>
          </div>
          {Array.from({ length: data.endPage }, (_, index) => (
            <button
              onClick={() => {
                setPage((prev) => index + 1);
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
                if (page + 1 >= data.endPage) {
                  setPage(data.endPage);
                } else {
                  setPage(page + 1);
                }
              }}
              className="ml-2 text-[16px]"
            >{`>`}</button>
            <button
              onClick={() => {
                setPage(data.endPage);
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
