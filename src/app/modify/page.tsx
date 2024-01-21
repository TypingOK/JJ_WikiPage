"use client";
import WriteForm from "@/components/writeForms";
import { useDetailFetch } from "@/hooks/useDetailFetch";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

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

  const data = useDetailFetch(detail ? detail : "");
  
  if (typeof data === "object") {
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
    redirect("/non-exist");
  }
};

export default ModifyPage;
