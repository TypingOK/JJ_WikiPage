"use client";
import WriteForm from "@/components/writeForms";
import { useDetailFetch } from "@/hooks/useDetailFetch";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

const modifyPost = async (data: {
  id?: number;
  title: string;
  content: string;
}) => {
  const response = await fetch(`/api/write`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  return response.json();
};

const ModifyPage = () => {
  const searchParams = useSearchParams();
  const detail = searchParams.get("detail");

  const { data, isLoading } = useDetailFetch(detail ? detail : "");
  if (isLoading) {
    return <div>로딩중...</div>;
  } else if (data && data !== 404) {
    return (
      <div className="w-full">
        <WriteForm
          id={data.id}
          title={data.title}
          content={data.content}
          actionFunction={modifyPost}
        />
      </div>
    );
  } else {
    return <div>존재하지 않는 데이터입니다.</div>;
  }
};

export default ModifyPage;
