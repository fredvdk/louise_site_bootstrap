import React from "react";
import { useState } from "react";
import "./styles/navbar.css";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const collapse = ()=>{ setIsNavExpanded(!isNavExpanded); }

  return (
    <nav className="navigation sticky">
      <a href="/" className="brand-name menu">
        Psycholoog Louise
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
       <ul> 
        <li>
          <Link to={{ pathname: "/", hash: "#overMij" }} className={"menu"} onClick={collapse}>Over Mij</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "#therapie" }} className={"menu"} onClick={collapse}>Therapie</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "#voorWie" }} className={"menu"} onClick={collapse}>Voor Wie</Link>
        </li>
        <li>
          <Link to={{ pathname: "/", hash: "#tarieven" }} className={"menu"} onClick={collapse}>Tarieven</Link>
        </li>
        <li>
          <Link to={{ pathname: "/reservatie", hash: "#home" }} className={"menu"} onClick={collapse}>Afspraak maken</Link>
        </li>
        </ul> 
        
      </div>
    </nav>
  );
}
