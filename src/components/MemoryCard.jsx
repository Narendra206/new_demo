import { useNavigate } from "react-router-dom";

function MemoryCard({ image, text, date }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={image} alt="memory" />

      <p>{text}</p>

      {/* wrapper for spacing */}
      <div className="card-footer">
        <small className="date">{date}</small>

        <button onClick={() => navigate("/quotes")}>
          Touch & Feel ❤️
        </button>
      </div>
    </div>
  );
}

export default MemoryCard;
