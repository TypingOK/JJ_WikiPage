"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription } from "@/components/ui/card";

const DetailChapters = ({
  hTags,
  scrollToH1,
}: {
  hTags: string[];
  scrollToH1: (index: number) => void;
}) => {
  return (
    <Card className="md:w-1/3 w-2/3 my-3 p-3">
      <CardDescription className="ml-2">목차</CardDescription>
      <div className="w-full flex flex-col mr-auto">
        {hTags &&
          hTags.length > 0 &&
          hTags.map((e, index) => (
            <Button
              variant="ghost"
              className="w-full"
              key={index}
              onClick={() => {
                scrollToH1(index);
              }}
            >
              {e}
            </Button>
          ))}
      </div>
    </Card>
  );
};

export default DetailChapters;
