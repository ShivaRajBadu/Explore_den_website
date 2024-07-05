"use client";
import React from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "@/app/blogs/quill.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="rounded  animate-pulse">
      <div className="bg-gray-200 h-[600px]  w-full"></div>
    </div>
  ),
});

const QuillEditor = ({ content }: { content: string }) => {
  return (
    <div className="quill-content-only ">
      <ReactQuill
        value={content}
        readOnly={true}
        modules={{ toolbar: false }}
        theme={"snow"}
      />
    </div>
  );
};

export default QuillEditor;
