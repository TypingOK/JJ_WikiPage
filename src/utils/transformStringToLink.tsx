import Link from "next/link";
import { Fragment } from "react";

export const convertToLink = (
  link: string,
  index: number,
  title?: string
): React.ReactNode => {
  return (
    <Link className="text-blue-700" href={link} key={index}>
      {title ? title : link}
    </Link>
  );
};
export const transformString = (inputString: string): React.ReactNode => {
  const parts = inputString.split(/\[\[|\]\]/);
  return parts.map((part: string, index: number) => {
    if (index % 2 === 1) {
      const [link, title] = part.split("|");
      return convertToLink(link, index, title);
    } else {
      return <Fragment key={index}>{part}</Fragment>;
    }
  });
};
