import festivelogo from '../img/festive.png';
import { Link } from "react-scroll";

function Navbar() {
  document.addEventListener("scroll", function (e) {
    if (window.screen.width < 768 && window.scrollY > 690) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else if (window.screen.width > 768 && window.scrollY > 220) {
      const gotop = document.querySelector(".gotop");
      gotop.classList.add("display");

      const nav = document.querySelector(".navbar");

      nav.classList.add("navopened");
    } else {
      const nav = document.querySelector(".navbar");
      const gotop = document.querySelector(".gotop");
      gotop.classList.remove("display");
      nav.classList.remove("navopened");
    }
  });

  function openBar() {
    const bar = document.querySelector(".bar");
    bar.classList.toggle("opened");
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <div className="logo-container">
            <h1 className="logo">
              <Link
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                style={{ cursor: "pointer" }}
              >
                <img alt="hi" src={festivelogo} className="img-fluid" />
              </Link>
            </h1>
          </div>
          <ul className="bar">
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={-200}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={openBar}
                activeClass="active"
                to="bookings"
                spy={true}
                smooth={true}
                duration={1000}
                className="book-now-button"
              >
                Book Now!
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
