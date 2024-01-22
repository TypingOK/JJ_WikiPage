"use client;";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostDetail } from "@/types";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";
import { useRef, useState } from "react";
import DetailChapters from "./chapters";

const DetailContent = ({ post }: { post: PostDetail }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const extractH1TagsAndHashtags = () => {
    const combinedMatches = post.content.match(/<h1>.*?<\/h1>|#(?:\s.+)?\n/g);
    let combinedResult: (string | null)[] = [];
    if (combinedMatches) {
      combinedResult = combinedMatches
        .map((match) => {
          if (match.startsWith("<h1>")) {
            return match.replace(/<\/?h1>/g, "");
          } else if (match.startsWith("#")) {
            return match.trim().replace(/^#\s+|\n$/, "");
          }
          return null;
        })
        .filter(Boolean);
    }
    return combinedResult;
  };

  const [hTags] = useState<(string | null)[]>(extractH1TagsAndHashtags());

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
    <Card className="md:w-2/3 w-full my-5">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex flex-col">
        <Link
          href={`/modify?detail=${post.title}`}
          className={`ml-auto ${buttonVariants({ variant: "outline" })}`}
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
        <Link href={`/`} className={buttonVariants({ variant: "outline" })}>
          목록으로
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DetailContent;
