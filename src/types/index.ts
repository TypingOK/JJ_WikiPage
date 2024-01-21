// 게시글 요소 하나 타입
export interface PostDetail {
  id: number;
  title: string;
  content: string;
}

// 게시글 리스트 타입
export interface PostList {
  endPage: number;
  page: number;
  posts: {
    id: number;
    title: string;
  }[];
}
