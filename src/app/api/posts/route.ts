import { NextResponse } from "next/server";
import { getDummyPost } from "../(dummy)/dummyPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")!);

  const startIndex = (page - 1) * 5;
  const newDummyPosts = getDummyPost();

  const endIndex =
    newDummyPosts.length >= startIndex + 5
      ? startIndex + 5
      : newDummyPosts.length;
  let reverseDummyPost = [...newDummyPosts].reverse();
  const endPage = Math.ceil(newDummyPosts.length / 5);
  let posts = reverseDummyPost.slice(startIndex, endIndex);
  return NextResponse.json({ page, endPage, posts });
}
