import { useState, useRef } from "react";
import "./styles.css"; // Pastikan CSS sudah diimport

export default function JobList() {
  // State untuk mengontrol mode gelap
  const [darkMode, setDarkMode] = useState(false);
  // State untuk navigasi
  const [showNav, setShowNav] = useState(false);
  // State untuk input search
  const [showSearch, setShowSearch] = useState(false);

  // Ref untuk search input
  const searchInputRef = useRef(null);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Toggle Navigasi
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  // Toggle Search Input
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => searchInputRef.current?.focus(), 100); // Fokus input setelah muncul
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
    <header>
    <button id="dark-mode-icon" onClick={toggleDarkMode}>
    🌙 Mode Gelap
    </button>
    <button id="hamburger-enak" onClick={toggleNav}>
    🍔 Menu
    </button>
    <button id="search-icon" onClick={toggleSearch}>
    🔍 Cari
    </button>
    </header>

    <nav className={showNav ? "show-nav" : ""}>Navigasi</nav>

    <div className="search-container">
    <input
    ref={searchInputRef}
    type="text"
    id="search-input"
    className={showSearch ? "visible" : "hidden"}
    placeholder="Cari sesuatu..."
    />
    </div>

    <main>
    <h1>Selamat Datang!</h1>
    </main>
    </div>
  );
}
