import { useState } from "react";
import "./Header.scss";
import site_logo from "../../../../assets/icons/site-logo.png";
import hamburger from "../../../../assets/icons/hamburger.png";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = (e) => {
    e.preventDefault();
    setSidebar(!sidebar);
    console.log(sidebar);
    if (sidebar === true) {
      document.getElementById("sidebar").style.display = "block";
    } else {
      document.getElementById("sidebar").style.display = "none";
    }
  };
  return (
    <header>
      <div>
        <a href="/" id="site-logo">
          <img src={site_logo} alt="#" />
        </a>
      </div>
      <div>
        <a href="/" id="site-name">
          teafographic
        </a>
      </div>
      <div className="header-links">
        {/* <a href='/learn'>HOW IT WORKS</a> */}
        <a href="/encyclopedia">ENCYCLOPEDIA</a>
        {/* <a href='/login'>LOG IN</a>
					<button><a href='/register'>CREATE ACCOUNT</a></button> */}
      </div>
      <div className="header-hamburger">
        <a href="/" onClick={openSidebar}>
          <img src={hamburger} alt="#" />
        </a>
      </div>
    </header>
  );
};

export default Header;
