export const postDetailTypeChecker = (postTitle: string | string[]): string => {
  let returnTitle = "";
  if (typeof postTitle === "string") {
    returnTitle = postTitle;
  } else if (Array.isArray(postTitle)) {
    returnTitle = postTitle[0];
  }

  return returnTitle;
};
