"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ModalWrapper from "../Modal";
import PostTitleList from "./postTitleList";
import ContentEditorWrapper from "./mdEditor";
import { RefMDEditor } from "@uiw/react-md-editor";

interface WriteFormsType {
  id?: number;
  title: string;
  content: string;
  actionFunction: ({
    id,
    title,
    content,
  }: {
    id?: number;
    title: string;
    content: string;
  }) => Promise<any>;
}

const WriteForm = ({ id, title, content, actionFunction }: WriteFormsType) => {
  const router = useRouter();
  const editorRef = useRef<RefMDEditor>(null);

  const [modalOpenState, setModalOpenState] = useState(false);
  const { mutate } = useMutation({
    mutationFn: actionFunction,
    onSuccess: (e) => {
      router.push(`/${e.title}`);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: title,
      content: content,
    },
  });

  const modalHandler = () => {
    setModalOpenState((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col">
      {modalOpenState && (
        <ModalWrapper onCloseModal={modalHandler} width="w-4/6">
          <PostTitleList />
        </ModalWrapper>
      )}
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(editorRef.current?.markdown);
          if (
            editorRef !== undefined &&
            editorRef.current &&
            editorRef.current.markdown
          ) {
            if (id !== undefined) {
              mutate({ ...data, id, content: editorRef.current.markdown });
            } else {
              mutate({ ...data, content: editorRef.current.markdown });
            }
          }
        })}
      >
        <div className="w-full flex">
          <label className="w-20">제목</label>
          <input
            className="w-2/3 border"
            {...register("title", {
              required: "제목을 입력해주세요.",
            })}
          />
          <p>{errors.title?.message}</p>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex">
            <label className="w-20">내용</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                modalHandler();
              }}
              className="ml-10"
            >
              링크 추가
            </button>
          </div>
          {/* <textarea
            className="w-full h-96 border"
            {...register("content", { required: "내용을 입력해주세요." })}
          /> */}
          <ContentEditorWrapper editorRef={editorRef} defaultValue={content} />
          <p>{errors.content?.message}</p>
        </div>
        <input className="border ml-auto mt-3 w-40 h-10" type="submit" />
      </form>
    </div>
  );
};

export default WriteForm;
