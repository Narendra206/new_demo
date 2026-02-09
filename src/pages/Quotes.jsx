function Quotes() {
  const quotes = [
    "Friendship is the home of the heart ❤️",
    "Real bonds never break 🤝",
    "Memories + Friends = Happiness ✨",
    "Together is my favorite place to be 💛"
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Friendship & Bond Quotes</h2>

      {quotes.map((q, i) => (
        <p key={i}>{q}</p>
      ))}
    </div>
  );
}

export default Quotes;
