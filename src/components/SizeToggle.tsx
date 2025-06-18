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

const buttonBase =
  "px-4 py-2 rounded-lg font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400";
const selected =
  "bg-gradient-to-r from-blue-700 to-green-600 text-white border-blue-700 shadow-lg";
const unselected =
  "bg-gray-800 text-blue-200 border-gray-700 hover:bg-gray-700 hover:text-white";

const SizeToggle: React.FC<SizeToggleProps> = ({ size, setSize, customSize, setCustomSize }) => (
  <div className="flex flex-wrap gap-3 items-center justify-center">
    {SIZE_OPTIONS.map(opt => (
      <button
        key={opt.value}
        type="button"
        className={`${buttonBase} ${size === opt.value ? selected : unselected}`}
        onClick={() => setSize(opt.value)}
      >
        {opt.label}
      </button>
    ))}
    <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-700">
      <button
        type="button"
        className={`${buttonBase} ${!SIZE_OPTIONS.some(opt => opt.value === size) ? selected : unselected}`}
        onClick={() => setSize(Number(customSize) || 1)}
      >
        Custom
      </button>
      <input
        type="number"
        min={1}
        className="bg-gray-900 text-blue-200 border-none rounded px-2 py-1 w-20 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={customSize}
        onChange={e => {
          setCustomSize(e.target.value);
          setSize(Number(e.target.value) || 1);
        }}
      />
      <span className="text-blue-200">words</span>
    </div>
  </div>
);

export default SizeToggle;
