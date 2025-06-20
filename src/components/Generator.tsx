"use client";
import React, { useState } from "react";
import SizeToggle from "./SizeToggle";
import GenerateButton from "./GenerateButton";
import GeneratedText from "./GeneratedText";
import { generatePlaceholderText } from "../lib/gemini";

export default function Generator() {
  const [size, setSize] = useState(10);
  const [customSize, setCustomSize] = useState("");
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
      const result = await generatePlaceholderText(size);
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
    <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-6 bg-gray-900 rounded shadow p-6 border border-gray-200">
      <SizeToggle
        size={size}
        setSize={setSize}
        customSize={customSize}
        setCustomSize={setCustomSize}
      />
      <GenerateButton loading={loading} onClick={handleGenerate} />
      <GeneratedText
        text={text}
        loading={loading}
        copied={copied}
        onCopy={handleCopy}
      />
      {error && (
        <div className="text-red-500 text-sm font-semibold mt-2">{error}</div>
      )}
    </div>
  );
}
