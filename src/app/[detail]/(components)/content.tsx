"use client;";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";

const DetailContent = ({ post }: { post: PostDetail }) => {
  const router = useRouter();
  return (
    <Card className="md:w-2/3 w-full">
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
        {/* 라이트 테마 */}
        <div data-color-mode="light">
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
