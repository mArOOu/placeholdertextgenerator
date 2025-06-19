import React from "react";

interface GenerateButtonProps {
  loading: boolean;
  onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  loading,
  onClick,
}) => (
  <button
    className="px-6 py-2 rounded bg-blue-600 text-white font-semibold text-base shadow hover:bg-blue-700 transition disabled:opacity-60 focus:outline-none focus:ring"
    onClick={onClick}
    disabled={loading}>
    {loading && <span className="bg-red-600"></span>}
    Generate Placeholder Text
  </button>
);

export default GenerateButton;
