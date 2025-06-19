import React from "react";

interface GeneratedTextProps {
  text: string;
  loading: boolean;
  copied: boolean;
  onCopy: () => void;
}

const GeneratedText: React.FC<GeneratedTextProps> = ({
  text,
  loading,
  copied,
  onCopy,
}) => (
  <div className="relative w-full min-h-[100px] bg-gray-100 border border-gray-300 rounded p-4 text-base text-gray-800 flex flex-col justify-center items-center">
    {text ? (
      <>
        <button
          className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded focus:outline-none focus:ring"
          title="Copy"
          onClick={(e) => {
            e.stopPropagation();
            onCopy();
          }}>
          {copied ? (
            <svg
              className="w-4 h-4 inline text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 inline text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15V5a2 2 0 012-2h10" />
            </svg>
          )}
          <span className="ml-1">Copy</span>
        </button>
        <span className="block w-full break-words text-center mb-2 z-0">
          {text}
        </span>
      </>
    ) : loading ? (
      <span className="text-blue-500">Generating…</span>
    ) : (
      <span className="text-gray-400">
        Your funny placeholder text will appear here.
      </span>
    )}
  </div>
);

export default GeneratedText;
