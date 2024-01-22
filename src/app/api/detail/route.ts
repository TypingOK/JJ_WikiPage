import { NextResponse } from "next/server";
import { dummyPosts } from "../(dummy)/dummyPosts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const post = searchParams.get("post");
  console.log("주소 값", post);
  if (post) {
    const decodePost = decodeURIComponent(post);
    console.log("post 디코드", post);
    const findPostResult = dummyPosts.find((e) => {
      if (e.title === decodePost) {
        return e;
      }
    });
    console.log("찾아낸 결과", findPostResult);
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
