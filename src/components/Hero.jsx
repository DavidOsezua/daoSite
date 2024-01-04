import React from "react";
import styles from "./Hero.module.css";
import { bgDao } from "../assets";

const Hero = () => {
  return (
    <section className={`${styles.section}  bg-[#000]  `}>
      <div>
        <div className={`${styles.circle} ${styles.con}`}>
          <img src={bgDao} />
        </div>

        <div className={`${styles.content} text-[#fff]`}>
          <p className={`${styles.text}`}>DawWallet Under Construction</p>
          <div className="flex justify-center mt-[1rem]">
            <button className={`${styles.btn}`}>Back to Website</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
