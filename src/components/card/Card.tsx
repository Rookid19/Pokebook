import React, { useState } from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import image from "../../../public/assets/images/chizard.png";
import { RiEyeLine } from "react-icons/ri";
import useModal from "../modal/Modal";

function Card({
  id,
  item,
  pokemonsDescription,
}: {
  id: number;
  item: any;
  pokemonsDescription: any;
}) {
  const [isHovered, setHovered] = useState<any>({});
  const { colorTheme }: any = useModal();
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHovered({ ...isHovered, [id]: true })}
      onMouseLeave={() => setHovered({})}
    >
      <div className={styles.small_card}>
        <Image
          // src={image}
          src={
            pokemonsDescription?.[item?.name]?.sprites.other.dream_world
              .front_default
          }
          alt="PokeBook Logo"
          height={187}
          width={191}
          className={styles.image}
        />
      </div>
      <div className={styles.name}>{item.name}</div>
      <div className={styles.types}>
        {pokemonsDescription?.[item?.name]?.types[0] && (
          <div className={styles.type}>
            {pokemonsDescription?.[item?.name]?.types[0]?.type.name}
          </div>
        )}
        {pokemonsDescription?.[item?.name]?.types[1] && (
          <div className={styles.type}>
            {pokemonsDescription?.[item?.name]?.types[1]?.type.name}
          </div>
        )}
      </div>
      {isHovered[id] && (
        <div
          className={styles.view}
          style={{
            backgroundColor: colorTheme,
          }}
        >
          <div className={styles.view_name}>View Pokeman</div>
          <RiEyeLine color={"white"} />
        </div>
      )}
    </div>
  );
}

export default Card;
