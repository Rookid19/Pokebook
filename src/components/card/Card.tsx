import React, { useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import image from "../../../public/assets/images/chizard.png";
import { RiEyeLine } from "react-icons/ri";

function Card({ id }: { id: number }) {
  const [isHovered, setHovered] = useState<any>({});
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHovered({ ...isHovered, [id]: true })}
      onMouseLeave={() => setHovered({})}
    >
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
      {isHovered[id] && (
        <div className={styles.view}>
          <div className={styles.view_name}>View Pokeman</div>
          <RiEyeLine color={"white"} />
        </div>
      )}
    </div>
  );
}

export default Card;
