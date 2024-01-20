import Link from "next/link";

const NotExist = () => {
  return (
    <div className="w-full min-h-screen h-full">
      <div>해당 페이지를 찾을 수 없습니다. 없는 페이지 입니다!</div>
      <Link href="/">메인으로 돌아가기</Link>
    </div>
  );
};

export default NotExist;
