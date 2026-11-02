import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={{ padding: "1rem 2rem", background: "#ecf0f1" }}>
        <h1>Hoosier Trails Outfitters</h1>
      </header>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/parks">Parks</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <main className="layout-container">
        <Outlet />
      </main>

      <footer
        style={{
          padding: "1rem 2rem",
          background: "#ecf0f1",
          marginTop: "2rem",
        }}>
        <p>
          © {new Date().getFullYear()} Hoosier Trails Outfitters. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
