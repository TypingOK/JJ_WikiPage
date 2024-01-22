import { NextResponse } from "next/server";
import { dummyPosts } from "../(dummy)/dummyPosts";

export async function POST(request: Request) {
  const body = await request.json();

  dummyPosts.push({
    ...body,
    id: dummyPosts.length + 1,
  });
  return NextResponse.json({ title: body.title }, { status: 200 });
}

export async function PUT(request: Request) {
  const body = await request.json();
  dummyPosts[body.id - 1] = {
    ...body,
  };

  return NextResponse.json({ title: body.title }, { status: 200 });
}
