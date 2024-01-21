"use client";

import { useDetailFetch } from "@/hooks/useDetailFetch";
import { postDetailTypeChecker } from "@/utils/postDetailTypeChecker";
import Link from "next/link";
import { useParams, redirect } from "next/navigation";
import React, { Fragment } from "react";
import DetailContent from "./content";


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

const DetailWrapper = () => {
  const params = useParams();
  const detail = params.detail;

  const data = useDetailFetch(
    decodeURIComponent(postDetailTypeChecker(detail))
  );

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
  if (typeof data === "object") {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex"></div>
        <DetailContent post={data} />
      </div>
    );
  } else {
    redirect("/not-exist");
  }
};

export default DetailWrapper;
