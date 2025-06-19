import React from "react";

interface SizeToggleProps {
  size: number;
  setSize: (size: number) => void;
  customSize: string;
  setCustomSize: (val: string) => void;
}

const SIZE_OPTIONS = [
  { label: "Short (10 words)", value: 10 },
  { label: "Medium (20 words)", value: 20 },
  { label: "Big (50 words)", value: 50 },
  { label: "Huge (100 words)", value: 100 },
];

const SizeToggle: React.FC<SizeToggleProps> = ({
  size,
  setSize,
  customSize,
  setCustomSize,
}) => (
  <div className="flex flex-wrap gap-2 items-center justify-center">
    {SIZE_OPTIONS.map((opt) => (
      <button
        key={opt.value}
        type="button"
        className={`px-5 py-3 rounded border text-sm font-medium focus:outline-none focus:ring  ${
          size === opt.value
            ? "bg-blue-600 text-white hover:bg-blue-900"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
        onClick={() => setSize(opt.value)}>
        {opt.label}
      </button>
    ))}
    <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded border border-gray-300">
      <button
        type="button"
        className={`px-3 py-1 rounded border text-sm font-medium focus:outline-none focus:ring ${
          !SIZE_OPTIONS.some((opt) => opt.value === size)
            ? "bg-blue-600 text-white hover:bg-blue-900"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
        onClick={() => setSize(Number(customSize) || 1)}>
        Custom
      </button>
      <input
        type="number"
        min={1}
        className="bg-white text-gray-800 border rounded px-2 py-1 w-16 focus:outline-none focus:ring"
        value={customSize}
        onChange={(e) => {
          setCustomSize(e.target.value);
          setSize(Number(e.target.value) || 1);
        }}
      />
      <span className="text-gray-600">words</span>
    </div>
  </div>
);

export default SizeToggle;
