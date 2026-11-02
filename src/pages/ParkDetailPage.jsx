import { useParams, useNavigate, Link } from "react-router-dom";
import parksData from "../parks.json";

export default function ParkDetailPage() {
  const { parkId } = useParams();
  const navigate = useNavigate();

  const park = parksData.find((p) => p.id === parkId);

  if (!park) {
    return (
      <div>
        <h2>Park not found</h2>
        <p>We couldn't find a park matching that URL.</p>
        <Link to="/parks">Return to all parks</Link>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate("/parks")}
        style={{ marginBottom: "1rem" }}>
        &larr; Back to all parks
      </button>
      <h2>{park.name} National Park</h2>
      <p>
        <strong>State:</strong> {park.state} | <strong>Established:</strong>{" "}
        {park.established}
      </p>
      <img
        src={park.image}
        alt={park.name}
        style={{ maxWidth: "100%", borderRadius: "8px" }}
      />
      <p>{park.description}</p>

      <h3>Highlights</h3>
      <ul>
        {park.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
}
