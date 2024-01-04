import React from 'react';
import '../../styles.css';
const QuoteDisplay = ({ quote }) => {
  return (
    <div className="quote-container">
      <h2>Quote</h2>
      <p>{quote.content}</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default QuoteDisplay;
