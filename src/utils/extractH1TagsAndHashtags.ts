const extractH1TagsAndHashtags = (content: string) => {
  const combinedMatches = content.match(/<h1>.*?<\/h1>|#(?:\s.+)?\n/g);
  let combinedResult: (string | null)[] = [];
  if (combinedMatches) {
    combinedResult = combinedMatches
      .map((match) => {
        if (match.startsWith("<h1>")) {
          return match.replace(/<\/?h1>/g, "");
        } else if (match.startsWith("#")) {
          return match.trim().replace(/^#\s+|\n$/, "");
        }
        return null;
      })
      .filter(Boolean);
  }
  return combinedResult;
};

export default extractH1TagsAndHashtags;
