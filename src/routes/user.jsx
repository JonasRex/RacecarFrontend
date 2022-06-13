import { useState, useEffect } from "react";
import Quote from "../components/Quote";

  const user = ({facade}) => {
    const [quotes, setQuotes] = useState([{ id:"1", q:"Bla Bla", a:"La Bla"}]);
  
    /*
    useEffect(() => {
      const getQuotes = async () => {
        const quotesFromServer = await facade.fetchQuotes();
        setQuotes(quotesFromServer);
      };
      getQuotes();
    }, []);
    */

  return (
    <div>
      <h1>All Your favorite Quotes</h1>
      <table className="table-container">
        <thead>
          <tr>
          <th>ID</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
        </thead>

        <tbody>
          {quotes.map((quote) => (
            <Quote key={quote.id} quote={quote} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default user;
