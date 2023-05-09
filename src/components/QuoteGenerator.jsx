import React, { useState } from "react";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <p>{author}</p>
      {/* TODO: Add button to fetch new quote */}
    </div>
  );
}

export default QuoteGenerator;
