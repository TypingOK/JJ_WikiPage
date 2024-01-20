"use client";
import WriteForm from "@/components/writeForms";
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
