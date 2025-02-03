import React from "react";

const JobItem = ({ job }) => {
  return (
    <>
  <svg
    id="wave"
    style={{ transform: "rotate(180deg)", transition: "0.3s" }}
    viewBox="0 0 1440 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      style={{ transform: "translate(0, 0px)", opacity: 1 }}
      fill="url(#sw-gradient-0)"
      d="M0,20L24,23.3C48,27,96,33,144,31.7C192,30,240,20,288,28.3C336,37,384,63,432,68.3C480,73,528,57,576,51.7C624,47,672,53,720,55C768,57,816,53,864,58.3C912,63,960,77,1008,71.7C1056,67,1104,43,1152,33.3C1200,23,1248,27,1296,23.3C1344,20,1392,10,1440,15C1488,20,1536,40,1584,51.7C1632,63,1680,67,1728,56.7C1776,47,1824,23,1872,18.3C1920,13,1968,27,2016,41.7C2064,57,2112,73,2160,73.3C2208,73,2256,57,2304,55C2352,53,2400,67,2448,71.7C2496,77,2544,73,2592,75C2640,77,2688,83,2736,73.3C2784,63,2832,37,2880,33.3C2928,30,2976,50,3024,58.3C3072,67,3120,63,3168,65C3216,67,3264,73,3312,66.7C3360,60,3408,40,3432,30L3456,20L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"
    />
    <defs>
      <linearGradient id="sw-gradient-1" x1={0} x2={0} y1={1} y2={0}>
        <stop stopColor="rgba(243, 106, 62, 1)" offset="0%" />
        <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
      </linearGradient>
    </defs>
    <path
      style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
      fill="url(#sw-gradient-1)"
      d="M0,0L24,6.7C48,13,96,27,144,26.7C192,27,240,13,288,21.7C336,30,384,60,432,70C480,80,528,70,576,56.7C624,43,672,27,720,28.3C768,30,816,50,864,53.3C912,57,960,43,1008,38.3C1056,33,1104,37,1152,46.7C1200,57,1248,73,1296,68.3C1344,63,1392,37,1440,35C1488,33,1536,57,1584,60C1632,63,1680,47,1728,40C1776,33,1824,37,1872,38.3C1920,40,1968,40,2016,45C2064,50,2112,60,2160,55C2208,50,2256,30,2304,25C2352,20,2400,30,2448,31.7C2496,33,2544,27,2592,33.3C2640,40,2688,60,2736,71.7C2784,83,2832,87,2880,78.3C2928,70,2976,50,3024,41.7C3072,33,3120,37,3168,40C3216,43,3264,47,3312,50C3360,53,3408,57,3432,58.3L3456,60L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"
    />
  </svg>
  {/*header design start*/}
  <header className="header">
    <a href="#" className="logo">
      Lokerin.
    </a>
    <nav className="navbar">
      <div className="navbar-icon">
        <button className="icon" id="dark-mode-icon">
          <i className="fas fa-moon" />
        </button>
        <button className="icon" id="search-icon">
          <i className="fas fa-search" />
        </button>
        <input
          id="search-input"
          type="text"
          placeholder="Cari Loker..."
          className="hidden"
        />
        <button className="icon" id="hamburger-enak">
          <i className="fas fa-bars" />
        </button>
      </div>
    </nav>
  </header>
  {/*header design end*/}
  {/*hero section design start*/}
  <main>
    <section className="upper">
      <div className="upper-container">
        <h1>
          Lorem, ipsum dolor. <br />
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          maxime voluptate repellat alias, accusamus praesentium.
        </p>
        <div className="email-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Notified</button>
        </div>
      </div>
    </section>
    <section className="lower">
      <div className="lower-container">
        <div className="post">
          <h2 className="post-title">Lorem ipsum dolor sit amet</h2>
          <div className="post-meta">March 3, 2016 | Lorem</div>
          <div className="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <a href="#" className="read-more">
            Continue reading →{" "}
          </a>
        </div>
        <div className="post">
          <h2 className="post-title">Ut enim ad minim veniam</h2>
          <div className="post-meta">February 29, 2016 | Ipsum</div>
          <div className="post-content">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <a href="#" className="read-more">
            Continue reading →{" "}
          </a>
        </div>
        <div className="post">
          <h2 className="post-title">Lorem ipsum dolor sit amet.</h2>
          <div className="post-meta">February 29, 2016 | Ipsum</div>
          <div className="post-content">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <a href="#" className="read-more">
            Continue reading →{" "}
          </a>
        </div>
        <div className="post">
          <h2 className="post-title">Ut enim ad minim veniam</h2>
          <div className="post-meta">February 29, 2016 | Ipsum</div>
          <div className="post-content">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
          <a href="#" className="read-more">
            Continue reading →{" "}
          </a>
        </div>
      </div>
    </section>
  </main>
  {/*hero section design end*/}
  {/*footer design start*/}
  <footer className="footer">
    <div className="container">
      <div>
        <h4>Moderna</h4>
        <p>
          A108 Adam Street
          <br />
          New York, NY 535022
        </p>
        <p>
          <strong>Phone:</strong> +1 5589 55488 55
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
      </div>
      <div className="underline">
        <h4>Useful Links</h4>
        <p>
          <a href="#">Home</a>
        </p>
        <p>
          <a href="#">About us</a>
        </p>
        <p>
          <a href="#">Services</a>
        </p>
        <p>
          <a href="#">Terms of service</a>
        </p>
      </div>
      <div>
        <h4 className="underline">Our Services</h4>
        <p>
          <a href="#">Web Design</a>
        </p>
        <p>
          <a href="#">Web Development</a>
        </p>
        <p>
          <a href="#">Product Management</a>
        </p>
        <p>
          <a href="#">Marketing</a>
        </p>
      </div>
      <div>
        <h4>Follow Us</h4>
        <p>
          Cras fermentum odio eu feugiat lide par naso tierra videa magna derita
          valies
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-instagram" />
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>
        © Copyright <strong>Moderna</strong>. All Rights Reserved
      </p>
      <p>
        Designed by <a href="#">wongirengsigma</a>
      </p>
    </div>
  </footer>
  {/*footer design end*/}
</>

  );
};

export default JobItem;
