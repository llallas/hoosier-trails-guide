import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>You've wandered off the trail!</p>
      <Link to="/">Take me home</Link>
    </div>
  );
}
