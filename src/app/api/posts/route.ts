import { NextResponse } from "next/server";
import { dummyPosts } from "../(dummy)/dummyPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")!);

  const startIndex = (page - 1) * 5;

  const endIndex =
    dummyPosts.length >= startIndex + 5 ? startIndex + 5 : dummyPosts.length;
  let reverseDummyPost = [...dummyPosts].reverse();
  const endPage = Math.ceil(dummyPosts.length / 5);
  let posts = reverseDummyPost.slice(startIndex, endIndex);
  return NextResponse.json({ page, endPage, posts });
}
