import { NextResponse } from "next/server";
import { dummyPosts } from "../(dummy)/dummyPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const post = searchParams.get("post");
  if (post) {
    const decodePost = decodeURIComponent(post);

    const findPostResult = dummyPosts.find((e) => {
      if (e.title === decodePost) {
        return e;
      }
    });

    if (findPostResult !== undefined) {
      return NextResponse.json(findPostResult);
    } else {
      return new Response(null, {
        status: 404,
        statusText: "invalid URL",
      });
    }
  } else {
    return new Response(null, {
      status: 404,
      statusText: "invalid URL",
    });
  }
}
