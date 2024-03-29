import { PostDetail } from "@/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export const detailFetcher = async (detail: string) => {
  const response = await fetch(`/api/detail?post=${detail}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return response.status as number;
  }
};

export const useDetailFetch = (detail: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["/api/detail", detail],
    queryFn: async () => {
      return await detailFetcher(detail);
    },
  });
  return data as PostDetail | number;
};
