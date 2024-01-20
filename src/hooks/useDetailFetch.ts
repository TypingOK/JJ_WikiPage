import { useQuery } from "@tanstack/react-query";

const detailFetcher = async (detail: string) => {
  const response = await fetch(`/api/detail?post=${detail}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return response.status;
  }
};

export const useDetailFetch = (detail: string) => {
  return useQuery({
    queryKey: ["/api/detail", detail],
    queryFn: () => detailFetcher(detail),
  });
};
