import { useEffect, useState } from "react";

const lines = [
  { text: "Empower Your", className: "bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent" },
  { text: "fintech journey", className: "text-gray-900" },
  { text: "with confidence", className: "text-gray-300" },
];

export default function TypewriterText() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentLine = lines[lineIndex].text;
    let timeout;

    if (!isDeleting && charIndex <= currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex > currentLine.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % lines.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <h1 className="text-4xl lg:text-5xl font-bold leading-tight min-h-[180px]">
      <span className={lines[lineIndex].className}>
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </h1>
  );
}
