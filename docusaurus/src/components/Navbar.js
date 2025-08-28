/**
 * Custom Navbar with links in the specified order and aligned to the top right.
 */
import React, { useState, useEffect } from "react";
import "./Navbar.css";
// Flag imports removed; use static folder paths
// import trflag from "../../common/SvgIcon/turkey-flag.svg";
// import enflag from "../../common/SvgIcon/united-kingdom-flag.svg";
import { translate } from "../Translation/Translation";
import Link from '@docusaurus/Link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("tr");

  const handleNavLinkClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    const currentUrl = window.location.href;
    const url = currentUrl.includes("lang=")
      ? currentUrl.replace(/lang=[a-z]{2}/, `lang=${lang}`)
      : currentUrl.includes("?")
      ? `${currentUrl}&lang=${lang}`
      : `${currentUrl}?lang=${lang}`;
    window.location.href = url;
  };

  const virtusarge = translate("virtus_arge");
  const about = translate("about");
  const products = translate("services");
  const contact = translate("contact");
  const team = translate("team");

  useEffect(() => {
    const handleLanguageChangeFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const lang = urlParams.get("lang");
      if (lang) {
        setSelectedLang(lang);
      }
    };
    handleLanguageChangeFromUrl();
  }, []);

  return (
    <nav className="custom-navbar">
      <a href={`/?lang=${selectedLang}`} className="title">
        <div className="navbar_imgtext" >
          <img src="/img/virtusrndlogo.png" alt="Virtus Arge Logo" width="18" height="18" style={{ marginRight: '5px' }} />
          <span>{virtusarge}</span>
        </div>
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/menu.svg" alt="Menu Icon" width="24" height="24" />
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li onClick={() => handleNavLinkClick("about")}> {/* Hakkımızda */}
          <span className="nav-link">{about}</span>
        </li>
        <li onClick={() => handleNavLinkClick("testpage")}> {/* Hizmetlerimiz */}
          <span>{products}</span>
        </li>
        <li onClick={() => handleNavLinkClick("teampage")}> {/* Ekibimiz */}
          <span>{team}</span>
        </li>
        <li onClick={() => handleNavLinkClick("contact")}> {/* Bizimle İletişime Geçin */}
          <span>{contact}</span>
        </li>
        <li onClick={() => window.location.href = `/blog`}> {/* Blog */}
          <span>Blog</span>
        </li>
        <li className="language-toggle">
          {selectedLang === "tr" ? (
            <img src="/united-kingdom-flag.svg" alt="English Flag" onClick={() => handleLanguageChange("en")} />
          ) : (
            <img src="/turkey-flag.svg" alt="Turkish Flag" onClick={() => handleLanguageChange("tr")} />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 