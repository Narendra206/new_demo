function Quotes() {
  const quotes = [
    "Friendship is the home where the heart feels safe ❤️",
    "Real friends understand your silence more than your words 🤍",
    "Some bonds are not made by blood, but by pure love 🤝",
    "Memories with friends turn ordinary days into beautiful stories ✨",
    "Distance may separate us, but our hearts stay connected forever 💛",
    "A true friend is a piece of your soul walking beside you 🌸",
    "Laughing together is the best therapy life gives us 😄",
    "Friends make life brighter, warmer, and more meaningful 🌈"
  ];

  return (
    <div className="quotes-container">
      <h2>Friendship & Bond Quotes 💕</h2>

      {quotes.map((q, i) => (
        <div key={i} className="quote-card">
          {q}
        </div>
      ))}
    </div>
  );
}

export default Quotes;
