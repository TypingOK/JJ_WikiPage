"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

const Detail = () => {
  const params = useParams();
  const detail = params.detail;

  // useQuery 훅스로 분리하기
  const { data, isLoading } = useQuery({
    queryKey: ["/api/detail", detail],
    queryFn: async () => {
      const response = await fetch(`/api/detail?post=${detail}`);
      if (response.status === 200) {
        return response.json();
      } else {
        return response.status;
      }
    },
  });
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data && data !== 404) {
    return (
      <div className="w-full flex flex-col">
        <div className="w-full flex">
          <Link href={`/modify?detail=${data.title}`} className="ml-auto">
            수정
          </Link>
        </div>
        <div>{data.title}</div>
        <div className="prose">{data.content}</div>
      </div>
    );
  } else {
    return <div>존재하지 않는 페이지 입니다.</div>;
  }
};

export default Detail;
