import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import logo from "../../../public/assets/images/poke_logo.svg";
import { RiSearch2Line } from "react-icons/ri";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter()
  return (
    <div className={styles.container} >
      <div className={styles.row} onClick={() => router.push('/')}>
        <Image
          src={logo}
          alt="PokeBook Logo"
          className={styles.image}
          height={120}
          width={130.71}
        />
        <div className={styles.name}>Pokebook</div>
      </div>
      <div className={styles.search_container}>
        <div className={styles.icon}>
          <RiSearch2Line color={"#DFDFDF"} size={24} />
        </div>
        <div className={styles.search_wrapper}>
          <input type="text" className={styles.search} placeholder="Search" />
        </div>
      </div>
      <div className={styles.theme_wrapper}>
        <div className={styles.theme}></div>
      </div>
    </div>
  );
}

export default Navbar;
