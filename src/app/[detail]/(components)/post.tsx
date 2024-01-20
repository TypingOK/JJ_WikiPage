"use client";

import { useDetailFetch } from "@/hooks/useDetailFetch";
import { postDetailTypeChecker } from "@/utils/postDetailTypeChecker";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { Fragment } from "react";

const convertToLink = (
  title: string,
  link: string,
  index: number
): React.ReactNode => {
  return (
    <Link className="text-blue-700" href={link} key={index}>
      {title}
    </Link>
  );
};

const Detail = () => {
  const params = useParams();
  const detail = params.detail;

  const { data, isLoading } = useDetailFetch(postDetailTypeChecker(detail));
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data && data !== 404) {
    const transformString = (inputString: string): React.ReactNode => {
      const parts = inputString.split(/<alink open>|]<alink close>/);
      return parts.map((part: string, index: number) => {
        if (index % 3 === 1) {
          const [title, link] = part.split("[");
          return convertToLink(title, link, index);
        } else {
          return <Fragment key={index}>{part}</Fragment>;
        }
      });
    };

    return (
      <div className="w-full flex flex-col">
        <div className="w-full flex">
          <Link href={`/modify?detail=${data.title}`} className="ml-auto">
            수정
          </Link>
        </div>
        <div>{data.title}</div>
        <div>{data.content && transformString(data.content)}</div>
      </div>
    );
  } else {
    return <div>존재하지 않는 페이지 입니다.</div>;
  }
};

export default Detail;
