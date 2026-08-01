import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import yayiIcon from "../assets/yayi2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#bond", label: "Yayi's Bond" },
    { href: "#support", label: "Support" },
  ];

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black h-16 px-6 flex items-center justify-between font-inter shadow-sm border-b-4 border-apc-green">
      <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
        <span className="flex items-center gap-3 font-bold text-4xl tracking-wide">
          <span className="text-apc-red">101</span>
          <span className="text-apc-green flex items-center">
            V<span className="mx-0.5">.</span>
            <span
              className="inline-block rounded-full bg-cover bg-center flex-shrink-0"
              style={{
                width: "1.3em",
                height: "1.3em",
                backgroundImage: `url(${yayiIcon})`,
              }}
            ></span>
            <span className="mx-0.5">.</span>T<span className="mx-0.5">.</span>S
          </span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="hover:text-apc-green transition-colors cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>

      <Link
        to="/join-volunteer"
        onClick={closeMenu}
        className="hidden md:inline-block bg-apc-green text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-apc-green-dark transition-colors"
      >
        Join VOTS
      </Link>

      <button
        className="md:hidden text-2xl text-apc-green"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-6 md:hidden border-t-2 border-apc-green">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-black font-medium hover:text-apc-green transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/join-volunteer"
            onClick={closeMenu}
            className="bg-apc-green text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-apc-green-dark transition-colors"
          >
            Join VOTS
          </Link>
        </div>
      )}
     <Link
        to="/join-volunteer"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-apc-green text-white font-semibold px-8 py-3 rounded-full shadow-lg"
      >
        Join VOTS
      </Link>
    </nav>
  );
}

export default Navbar;
