import React, { useState, useEffect } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";
import { EmojiConverter } from "./lib/EmojiConverter";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [copyFeedback, setCopyFeedback] = useState(false);

  const emojiConverter = new EmojiConverter();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 1500); // Reset after 2 seconds
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    setOutputText(emojiConverter.convert(text));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Emoji Magic
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "light" ? (
              <Moon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Sun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Enter your text
            </label>
            <textarea
              value={inputText}
              onChange={handleInputChange}
              className="w-full min-h-32 p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="Type something like 'What a sunny day it is!'"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Emoji Result
              </label>
              <button
                onClick={handleCopy}
                className="text-sm px-3 py-1 rounded-md bg-purple-100 hover:bg-purple-200 dark:bg-purple-900 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300 transition-colors relative"
              >
                {copyFeedback ? (
                  <span className="flex items-center">
                    <span className="mr-1">✓</span> Copied
                  </span>
                ) : (
                  "Copy"
                )}
              </button>
            </div>
            <div className="w-full min-h-32 p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 whitespace-pre-wrap">
              {outputText}
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full py-32 text-center text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
        Crafted with ❤️ by Krishna Vamsi Pasupuleti
      </footer>
    </div>
  );
}

export default App;
