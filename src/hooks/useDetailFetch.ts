import { useSuspenseQuery } from "@tanstack/react-query";

export const detailFetcher = async (detail: string) => {
  const response = await fetch(
    `http://localhost:3000/api/detail?post=${detail}`
  );
  if (response.status === 200) {
    return response.json();
  } else {
    return response.status;
  }
};

export const useDetailFetch = (detail: string) => {
  return useSuspenseQuery({
    queryKey: ["/api/detail", detail],
    queryFn: async () => {
      return await detailFetcher(detail);
    },
  });
};
