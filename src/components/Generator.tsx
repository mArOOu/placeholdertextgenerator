"use client";
import React, { useState } from "react";
import { generateFunnyText } from "../lib/gemini";

const SIZE_OPTIONS = [
  { label: "Short (10 words)", value: 10 },
  { label: "Medium (20 words)", value: 20 },
  { label: "Big (50 words)", value: 50 },
  { label: "Huge (100 words)", value: 100 },
];

export default function Generator() {
  const [size, setSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setText("");
    setCopied(false);
    try {
      const result = await generateFunnyText(size);
      setText(result);
    } catch (e: any) {
      setError(e.message || "Failed to generate text. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-6">
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <select
          className="border rounded px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}>
          {SIZE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <button
          className="relative flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
          onClick={handleGenerate}
          disabled={loading}>
          {loading && (
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
          )}
          Generate Funny Text
        </button>
      </div>
      <div
        className="relative group w-full min-h-[80px] bg-gray-100 border rounded p-4 text-lg text-gray-800 transition shadow hover:shadow-lg cursor-pointer"
        onClick={handleCopy}>
        {text ? (
          <>
            <span>{text}</span>
            <span className="copy-icon" title="Copy">
              {copied ? (
                <svg
                  className="w-5 h-5 text-green-500"
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
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15V5a2 2 0 012-2h10" />
                </svg>
              )}
            </span>
          </>
        ) : loading ? (
          <span className="text-gray-400">Generating…</span>
        ) : (
          <span className="text-gray-400">
            Your funny placeholder text will appear here.
          </span>
        )}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}
