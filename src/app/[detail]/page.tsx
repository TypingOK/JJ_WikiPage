import { detailFetcher } from "@/hooks/useDetailFetch";
import Detail from "./(components)/post";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/utils/getQueryClient";


const DetailPage = async ({ params }: { params: { detail: string } }) => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [`/api/detail`, params.detail],
    queryFn: async () => {
      return await detailFetcher(params.detail);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <Detail />
    </HydrationBoundary>
  );
};

export default DetailPage;
