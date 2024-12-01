import React, { useState, useEffect } from "react";

const citas = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
];

function App() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Generate a random quote on first load
  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * citas.length);
    setQuote(citas[randomIndex]);
  };

  return (
    <div
      id="quote-box"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "500px",
        width: "90%",
        textAlign: "center",
      }}
    >
      <p id="text" style={{ fontSize: "1.5em", fontStyle: "italic" }}>
        "{quote.text}"
      </p>
      <p id="author" style={{ fontSize: "1.2em", fontWeight: "bold", marginTop: "10px" }}>
        - {quote.author}
      </p>
      <button
        id="new-quote"
        onClick={generateRandomQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1em",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "#fff",
        }}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote.text}" - ${quote.author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          marginTop: "15px",
          color: "#1DA1F2",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Tweet
      </a>
    </div>
  );
}

export default App;
