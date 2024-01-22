"use client;";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostDetail } from "@/types";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";
import { useRef, useState } from "react";
import DetailChapters from "./chapters";
import extractH1TagsAndHashtags from "@/utils/extractH1TagsAndHashtags";

const DetailContent = ({ post }: { post: PostDetail }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const [hTags] = useState<(string | null)[]>(
    extractH1TagsAndHashtags(post.content)
  );

  const scrollToH1 = (index: number) => {
    if (parentRef && parentRef.current) {
      const h1Elements = parentRef.current.querySelectorAll("h1");

      if (h1Elements && h1Elements.length > index) {
        const h1Element = h1Elements[index];
        h1Element.scrollIntoView();
      }
    }
  };

  return (
    <Card className="md:w-2/3 w-full my-5 shadow-xl">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col">
        <Link
          href={`/modify?detail=${post.title}`}
          className={`ml-auto shadow ${buttonVariants({ variant: "outline" })}`}
        >
          수정
        </Link>
        {hTags && hTags.length > 0 && (
          <DetailChapters hTags={hTags as string[]} scrollToH1={scrollToH1} />
        )}
        {/* 라이트 테마 */}
        <div data-color-mode="light" ref={parentRef} className="w-full mt-5">
          <MDEditor.Markdown
            className="w-full p-3 rounded-2xl"
            source={post.content}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/`}
          className={`shadow ${buttonVariants({ variant: "outline" })}`}
        >
          목록으로
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DetailContent;
