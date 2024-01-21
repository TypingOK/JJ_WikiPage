"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import ContentEditorWrapper from "./mdEditor";
import { RefMDEditor } from "@uiw/react-md-editor";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: actionFunction,
    onSuccess: (e) => {
      queryClient.invalidateQueries({ queryKey: ["/api/detail", e.title] });
    },
  });

  const formSchema = z.object({
    title: z.string().refine(
      (data) => {
        const trimmedData = data.trim();
        return trimmedData.length <= 20 && trimmedData !== "";
      },
      {
        message: "빈 문자열은 허용 되지 않으면 20자 이하여야 합니다.",
      }
    ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      title: title,
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="w-full flex flex-col items-center p-3">
      <Form {...form}>
        <form
          className="w-full flex flex-col"
          onSubmit={form.handleSubmit(async (data) => {
            console.log(editorRef.current?.markdown);
            if (
              editorRef !== undefined &&
              editorRef.current &&
              editorRef.current.markdown
            ) {
              if (id !== undefined) {
                mutate(
                  { ...data, id, content: editorRef.current.markdown },
                  {
                    onSuccess: (e) => {
                      router.push(`/${e.title}`);
                    },
                  }
                );
              } else {
                mutate(
                  { ...data, content: editorRef.current.markdown },
                  {
                    onSuccess: (e) => {
                      router.push(`/${e.title}`);
                    },
                  }
                );
              }
            }
          })}
        >
          <div className="w-full flex ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex w-full h-16 mb-8 md:mb-2  items-center md:flex-row flex-col">
                  <FormLabel className="w-full h-full md:mt-3 md:items-center flex md:justify-center ml-4 md:ml-0 md:w-32 text-xl">
                    제목
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="md:w-1/2 w-full" />
                  </FormControl>
                  <FormMessage className="md:ml-2 ml-0" />
                </FormItem>
              )}
            ></FormField>
          </div>

          <div className="mt-2 w-full flex justify-center md:h-[700px] h-[450px]">
            <ContentEditorWrapper
              editorRef={editorRef}
              defaultValue={content}
            />
          </div>
          <div className="flex w-full mt-3">
            <Link
              href="/"
              className={` w-44 ${buttonVariants({ variant: "outline" })}`}
            >
              돌아가기
            </Link>
            <Button type="submit" className=" w-44 ml-auto">
              제출
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default WriteForm;
