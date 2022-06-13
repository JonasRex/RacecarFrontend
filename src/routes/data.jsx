import { useState, useEffect } from "react";
import facade from "../facades/dataFacade";
import "../styles/Data.css";

const data = () => {
  const [quote, setQuote] = useState({ q: "", a: "" });

  const getQuote = () => {
    facade.fetchQuote().then((res) => {
      setQuote(res[0]);
    });

    // console.log(quote);
    //setQuote(quote)
  };

  return (
    <div>
      <button className="btn-data" onClick={getQuote}>
        Get Random Quote
      </button>
      {quote.q == "" ? null : (
        <div className="container">
          <h1>{quote.q}</h1>
          <h1>- {quote.a}</h1>
          <button className="btn-data">Add to favorite</button>
        </div>
      )}
    </div>
  );
};

export default data;
