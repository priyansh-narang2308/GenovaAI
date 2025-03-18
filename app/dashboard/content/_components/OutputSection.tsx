"use client";

import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

interface PROPS {
    aiOutput: string
}

const OutputSection = ({ aiOutput }: PROPS) => {
    const editorRef = useRef<Editor>(null);

    // checks if the value is updated or not 
    useEffect(() => {
        const editorInstance = editorRef.current?.getInstance()
        editorInstance.setMarkdown(aiOutput)
    }, [aiOutput])

    const handleCopy = () => {
        if (editorRef.current) {
            const markdown = editorRef.current.getInstance().getMarkdown();
            navigator.clipboard.writeText(markdown);
            toast.success("Copied to clipboard!", {
                position: "top-right",
                duration: 2000,
                style: {
                    background: "#333",
                    color: "#fff",
                    borderRadius: "8px",
                },
            });
        } else {
            toast.error("Nothing to copy!", {
                position: "top-right",
            });
        }
    };

    return (
        <div className="bg-gray-900 shadow-xl border border-gray-700 rounded-xl p-6">
            <Toaster />

            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">Your Result</h2>
                <Button
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                    onClick={handleCopy}
                >
                    <Copy size={18} className="cursor-pointer" /> Copy
                </Button>
            </div>

            <div className="border border-gray-700 rounded-lg overflow-hidden">
                <Editor
                    ref={editorRef}
                    initialValue="Your result will appear here!"
                    initialEditType="wysiwyg"
                    height="500px"
                    theme="dark"
                    useCommandShortcut={true}
                    onChange={() => console.log(editorRef.current?.getInstance()?.getMarkdown())}
                />
            </div>
        </div>
    );
};

export default OutputSection;
