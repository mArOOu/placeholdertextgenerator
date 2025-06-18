"use client";
import React, { useState } from "react";
import { generateFunnyText } from "../lib/gemini";
import SizeToggle from "./SizeToggle";
import GenerateButton from "./GenerateButton";
import GeneratedText from "./GeneratedText";

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
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8 bg-gray-950 bg-opacity-95 rounded-2xl p-8 shadow-2xl border border-blue-900">
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
        <div className="text-green-400 text-sm font-semibold mt-2">{error}</div>
      )}
    </div>
  );
}
