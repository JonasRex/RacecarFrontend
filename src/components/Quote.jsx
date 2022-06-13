const Quote = ({ quote: {id,q, a} }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{q}</td>
      <td>{a}</td>
    </tr>
  );
};

export default Quote;