import React, { useState } from "react";
import axios from "axios";
import { ShieldAlert, ShieldCheck, Loader2 } from "lucide-react";

const PhishingChecker = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkPhishing = async () => {
    if (!url) {
      setResult({
        isPhishing: true,
        message: "Please enter a valid URL.",
        confidence: 0,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("/api/check", { url });
      setResult(response.data);
    } catch (error) {
      setResult({
        isPhishing: true,
        message: "Error checking URL. Please try again.",
        confidence: 0,
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-400">
        🔍 Phishing Detection
      </h1>

      {/* Input */}
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 text-sm font-medium" htmlFor="url">
          Enter URL:
        </label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {/* Button */}
      <button
        onClick={checkPhishing}
        disabled={isLoading}
        className={`w-full flex items-center justify-center p-3 rounded-lg text-white font-semibold ${
          isLoading
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-500 transition"
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin mr-2 w-5 h-5" /> Checking...
          </>
        ) : (
          "Check URL"
        )}
      </button>

      {/* Result */}
      {result && (
        <div
          className={`mt-6 p-4 rounded-lg border flex items-start gap-3 ${
            result.isPhishing
              ? "bg-red-900/30 border-red-500 text-red-300"
              : "bg-green-900/30 border-green-500 text-green-300"
          }`}
        >
          {result.isPhishing ? (
            <ShieldAlert className="w-6 h-6 flex-shrink-0" />
          ) : (
            <ShieldCheck className="w-6 h-6 flex-shrink-0" />
          )}
          <div>
            <p className="font-bold text-lg">{result.message}</p>
            <p className="text-sm opacity-80">
              Confidence: {result.confidence}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhishingChecker;
