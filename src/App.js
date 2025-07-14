import React, { useState } from "react";

const languages = ["Python", "JavaScript", "C++", "Java"];

export default function App() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("Python");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    setTimeout(() => {
      // simulate output
      setOutput("Your code ran successfully! 🔥");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A2E] p-6 shadow-lg hidden md:block">
        <h2 className="text-xl font-bold text-[#00FFFF] mb-6">
          Karunya Compiler
        </h2>
        <ul className="space-y-3">
          <li className="bg-[#3A3A5A] p-3 rounded-lg hover:bg-[#00FFFF] hover:text-black transition-all cursor-pointer">
            Main.js
          </li>
          <li className="bg-[#3A3A5A] p-3 rounded-lg hover:bg-[#00FFFF] hover:text-black transition-all cursor-pointer">
            styles.css
          </li>
        </ul>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#00FFFF]">Karunya Compiler</h1>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#00FFFF] text-black px-3 py-2 rounded-lg"
          >
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Code Editor */}
        <div className="bg-[#25273A] p-4 rounded-lg border border-[#00FFFF] mb-4">
          <textarea
            className="w-full h-48 bg-[#0D0D19] text-[#00FFFF] p-3 rounded-lg font-mono text-lg outline-none"
            placeholder="Write your code here..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        {/* Input */}
        <div className="bg-[#25273A] p-4 rounded-lg border border-[#00FFFF] mb-4">
          <input
            className="w-full bg-[#0D0D19] text-[#00FFFF] p-3 rounded-lg outline-none"
            placeholder="Input (if any)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={runCode}
          disabled={loading}
          className="bg-[#00FFFF] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#00D4D4] transition-all"
        >
          {loading ? "Running..." : "Run Code"}
        </button>

        {/* Output */}
        {output && (
          <div className="mt-6 bg-[#3EDBF0] text-black p-4 rounded-lg border border-[#00FFFF] font-mono">
            Output: {output}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-600 text-white p-4 rounded-lg border border-red-400 font-mono">
            Error: {error}
          </div>
        )}
      </main>
    </div>
  );
}
