import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="header bg-gray-200 dark:bg-gray-800 p-4 flex justify-between items-center relative">
      <a className="logo text-xl font-bold text-gray-900 dark:text-white">
        <Link to="/">Lokerin.</Link>
      </a>
      <nav className="navbar flex items-center space-x-4">
        <div className="navbar-icon flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            className="icon p-2 bg-gray-300 dark:bg-gray-600 rounded"
            id="dark-mode-icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>

          {/* Search Icon */}
          <button
            className="icon p-2 bg-gray-300 dark:bg-gray-600 rounded"
            id="search-icon"
            onClick={() => setSearchVisible(!searchVisible)}
          >
            <FaSearch className="text-gray-900 dark:text-white" />
          </button>

          {/* Search Input */}
          {searchVisible && (
            <input
              id="search-input"
              type="text"
              placeholder="Cari Loker..."
              className="px-3 py-1 rounded border border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}

          {/* Hamburger Menu */}
          <button
            className="icon p-2 bg-gray-300 dark:bg-gray-600 rounded md:hidden"
            id="hamburger-enak"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars className="text-gray-900 dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-200 dark:bg-gray-800 p-4 flex flex-col space-y-2 md:hidden">
          <input
            type="text"
            placeholder="Cari Loker..."
            className="px-3 py-1 rounded border border-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-300 dark:bg-gray-600 rounded"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
