"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor, { RefMDEditor, commands } from "@uiw/react-md-editor";
import React, { Ref, useState } from "react";

const ContentEditorWrapper = ({
  editorRef,
  defaultValue,
}: {
  editorRef: Ref<RefMDEditor>;
  defaultValue: string;
}) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);
  return (
    <MDEditor
      value={value}
      height="100%"
      onChange={setValue}
      ref={editorRef}
      className="w-full"
    />
  );
};

export default ContentEditorWrapper;
