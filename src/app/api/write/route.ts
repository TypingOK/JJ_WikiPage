import { NextResponse } from "next/server";
import { getDummyPost } from "../(dummy)/dummyPosts";

export async function POST(request: Request) {
  const body = await request.json();
  const newDummyPosts = getDummyPost();
  newDummyPosts.push({
    ...body,
    id: newDummyPosts.length + 1,
  });
  return NextResponse.json({ title: body.title }, { status: 200 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const newDummyPosts = getDummyPost();
  newDummyPosts[body.id - 1] = {
    ...body,
  };

  return NextResponse.json({ title: body.title }, { status: 200 });
}
