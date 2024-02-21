import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import image from "../../../public/assets/images/chizard.png";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.small_card}>
        <Image
          src={image}
          alt="PokeBook Logo"
          // height={187} width={191}
          className={styles.image}
        />
      </div>
      <div className={styles.name}>charizard</div>
      <div className={styles.types}>
        <div className={styles.type}>Fire</div>
        <div className={styles.type}>Flying</div>
      </div>
    </div>
  );
}

export default Card;
