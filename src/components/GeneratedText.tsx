import React from "react";

interface GeneratedTextProps {
  text: string;
  loading: boolean;
  copied: boolean;
  onCopy: () => void;
}

const GeneratedText: React.FC<GeneratedTextProps> = ({ text, loading, copied, onCopy }) => (
  <div className="relative w-full min-h-[120px] bg-gray-900 border border-blue-800 rounded-xl p-6 text-xl text-blue-100 transition shadow-lg hover:shadow-2xl flex flex-col justify-center items-center">
    {text ? (
      <>
        <button
          className="absolute top-4 right-4 bg-blue-700 hover:bg-green-600 text-white px-3 py-1 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-400 transition z-10"
          title="Copy"
          onClick={e => { e.stopPropagation(); onCopy(); }}
        >
          {copied ? (
            <svg className="w-5 h-5 inline text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="w-5 h-5 inline text-blue-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
          )}
          <span className="ml-2">Copy</span>
        </button>
        <span className="block w-full break-words text-center mb-2 z-0">{text}</span>
      </>
    ) : loading ? (
      <span className="text-blue-400">Generating…</span>
    ) : (
      <span className="text-blue-400">Your funny placeholder text will appear here.</span>
    )}
  </div>
);

export default GeneratedText;
