import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

const PageListPagination = ({
  page,
  lastPage,
}: {
  page: number;
  lastPage: number;
}) => {
  const router = useRouter();
  const startPage = Math.trunc((page - 1) / 10) * 10 + 1;
  const endPage = startPage + 9 <= lastPage ? startPage + 9 : lastPage;
  return (
    <Pagination className="w-full">
      <PaginationContent className="w-full flex flex-wrap">
        {startPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                router.push(`?page=${startPage - 1}`);
              }}
            />
          </PaginationItem>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <PaginationItem key={index + startPage}>
            <PaginationLink
              onClick={() => {
                router.push(`?page=${index + startPage}`);
              }}
              isActive={page === index + startPage && true}
            >
              {index + startPage}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < lastPage && (
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                router.push(`?page=${endPage + 1}`);
              }}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default PageListPagination;
