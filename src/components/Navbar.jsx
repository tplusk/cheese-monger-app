import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
    { path: "/retailers", label: "Retailers" },
  ];
  return (
    <div>
      <nav className="navbar">
        <ul id="navbarButtons">
          {navLinks.map(
            (link) =>
              location.pathname !== link.path && (
                <span key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </span>
              ),
          )}
        </ul>
      </nav>
    </div>
  );
}
