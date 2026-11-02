import { Link } from "react-router-dom";
import parksData from "../parks.json";

export default function ParksPage() {
  return (
    <div>
      <h2>All National Parks</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}>
        {parksData.map((park) => (
          <div key={park.id} className="park-card">
            <img src={park.image} alt={park.name} />
            <h3>
              {park.name}, {park.state}
            </h3>
            <Link to={`/parks/${park.id}`}>View Park Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
