"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/FallbackUI/globalErrorFallback";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type providerType = {
  children: React.ReactNode;
};

const Provider = ({ children }: providerType) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          throwOnError: true,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallbackRender={FallbackRender}>{children}</ErrorBoundary>
      {/* 리액트 쿼리 데브툴 */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Provider;
