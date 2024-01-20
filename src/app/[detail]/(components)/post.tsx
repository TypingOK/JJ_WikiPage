"use client";

import { useDetailFetch } from "@/hooks/useDetailFetch";
import { postDetailTypeChecker } from "@/utils/postDetailTypeChecker";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { Fragment } from "react";
import MDEditor from "@uiw/react-md-editor";

const convertToLink = (
  link: string,
  index: number,
  title?: string
): React.ReactNode => {
  return (
    <Link className="text-blue-700" href={link} key={index}>
      {title ? title : link}
    </Link>
  );
};

const Detail = () => {
  const params = useParams();
  const detail = params.detail;

  const { data } = useDetailFetch(postDetailTypeChecker(detail));

  const transformString = (inputString: string): React.ReactNode => {
    const parts = inputString.split(/\[\[|\]\]/);
    return parts.map((part: string, index: number) => {
      if (index % 2 === 1) {
        const [link, title] = part.split("|");
        return convertToLink(link, index, title);
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
      {/* 라이트 테마 */}
      <div data-color-mode="light">
        {/* {data.content && transformString(data.content)} */}
        {data.content && (
          <MDEditor.Markdown
            className="w-full p-9 rounded-2xl"
            source={data.content}
          />
        )}
      </div>
    </div>
  );
};

export default Detail;
