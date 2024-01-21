import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const NotExist = () => {
  return (
    <div className="w-full min-h-screen h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-7 font-bold">
        해당 페이지를 찾을 수 없습니다. 없는 페이지 입니다!
      </h1>
      <Link href={`/`} className={buttonVariants({ variant: "default" })}>
        메인 화면으로 돌아가기
      </Link>
    </div>
  );
};

export default NotExist;
