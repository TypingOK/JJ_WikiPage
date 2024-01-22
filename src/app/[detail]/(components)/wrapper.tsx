"use client";

import { useDetailFetch } from "@/hooks/useDetailFetch";
import { postDetailTypeChecker } from "@/utils/postDetailTypeChecker";

import { useParams, redirect } from "next/navigation";
import React from "react";
import DetailContent from "./content";


const DetailWrapper = () => {
  const params = useParams();
  const detail = params.detail;

  const data = useDetailFetch(
    decodeURIComponent(postDetailTypeChecker(detail))
  );

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
