import { NextResponse } from "next/server";
import { dummyPosts } from "../(dummy)/dummyPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const post = searchParams.get("post");
  if (post !== undefined) {
    const findPostResult = dummyPosts.find((e) => {
      if (e.title === post) {
        return e;
      }
    });
    console.log("---------------------------------------");
    console.log("찾은 게시물 결과", findPostResult);
    console.log(dummyPosts);
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

  // return NextResponse.json(findPostResult);
}
