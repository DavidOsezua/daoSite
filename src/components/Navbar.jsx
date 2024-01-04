import React, { useState } from "react";
import { logo } from "../assets";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [state, setState] = useState(`Daw wallet`);

  const stateHandler = (text) => {
    setState(text);
  };
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.navContainer}`}>
        <div>
          <img src={logo} />
        </div>
        <ul className={`${styles.linkContainer} text-[#fff] `}>
          <li
            onClick={() => stateHandler(`Daw wallet`)}
            className={`${
              state === "Daw wallet" ? styles.activeLink : ""
            } cursor-pointer`}
          >
            Daw Wallet
          </li>
          <li
            onClick={() => stateHandler(`DawCurrency`)}
            className={`${
              state === "DawCurrency" ? styles.activeLink : ""
            } cursor-pointer`}
          >
            Dawcurrency
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
