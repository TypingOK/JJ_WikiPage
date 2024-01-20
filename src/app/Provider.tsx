"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "@/components/FallbackUI/globalErrorFallback";

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
    </QueryClientProvider>
  );
};

export default Provider;
