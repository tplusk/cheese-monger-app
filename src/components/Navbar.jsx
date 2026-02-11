import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <div>
            <Link to="/">Home</Link>
          </div>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/retailers">Retailers</Link>
        </ul>
      </nav>
    </div>
  );
}
