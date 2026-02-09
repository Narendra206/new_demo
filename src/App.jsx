import "./App.css";
import { memories } from "./data/memories";
import MemoryCard from "./components/MemoryCard";
import Quotes from "./pages/Quotes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>🌸 Memory Lane</h1>
      <h3>Moments that will live forever ❤️</h3>

      <div className="grid">
        {memories.map((m) => (
          <MemoryCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

