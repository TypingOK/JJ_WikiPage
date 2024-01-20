"use client";
import WriteForm from "@/components/writeForms";

const uploadPost = async (data: { title: string; content: string }) => {
  const response = await fetch(`/api/write`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return response.json();
};

const WritePage = () => {
  return (
    <div className="w-full">
      <WriteForm content="" title="" actionFunction={uploadPost} />
    </div>
  );
};

export default WritePage;
