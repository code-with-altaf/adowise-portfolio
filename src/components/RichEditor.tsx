"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
    "video",
];

interface RichEditorProps {
    value: string;
    onChange: (content: string) => void;
    placeholder?: string;
}

export default function RichEditor({ value, onChange, placeholder }: RichEditorProps) {
    return (
        <div className="retro-card overflow-hidden bg-white">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                className="rich-editor-quill"
            />
            <style jsx global>{`
                .rich-editor-quill .ql-toolbar {
                    border: none !important;
                    border-bottom: 3px solid black !important;
                    background: #f8fafc;
                }
                .rich-editor-quill .ql-container {
                    border: none !important;
                    min-height: 250px;
                    font-size: 16px;
                }
                .rich-editor-quill .ql-editor {
                    padding: 20px;
                    font-family: inherit;
                }
            `}</style>
        </div>
    );
}
