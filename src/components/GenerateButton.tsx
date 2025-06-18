import React from "react";

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ loading, onClick }) => (
  <button
    className="relative flex items-center gap-2 bg-gradient-to-r from-blue-700 to-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-blue-800 hover:to-green-700 transition disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-green-400"
    onClick={onClick}
    disabled={loading}
  >
    {loading && (
      <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
    )}
    Generate Funny Text
  </button>
);

export default GenerateButton;
