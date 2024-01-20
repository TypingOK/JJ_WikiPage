"use client";

import { FallbackProps } from "react-error-boundary";

const FallbackRender = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>다음과 같은 에러가 발생하였습니다.</p>
      <pre className="text-red-600">{error.message}</pre>
      <button onClick={() => resetErrorBoundary()}>다시 시도해보기</button>
    </div>
  );
};

export default FallbackRender;
