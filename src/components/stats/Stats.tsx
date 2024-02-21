import React, { useState } from "react";
import styles from "./Stats.module.css";
import { RiArrowLeftLine } from "react-icons/ri";
import Image from "next/image";
import useModal from "../modal/Modal";

function StatsTemplate() {
  const data = ["About", "Stats", "Similar"];

  const [active, setActive] = useState(data[0]);

  const { colorTheme }: any = useModal();
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: 20 }}>
        <div className={styles.card}></div>
        <div className={styles.back}>
          <RiArrowLeftLine size={24} />
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
          }
          width={250}
          height={250}
          alt="pokemon"
        />
      </div>
      <div className={styles.name}>Ivysaur</div>
      <div className={styles.abilities}>
        <div className={styles.ability}>Grass</div>
        <div className={styles.ability}>Posion</div>
      </div>
      <div className={styles.title}>About</div>

      {active === "About" ? (
        <About />
      ) : active === "Stats" ? (
        <Stats colorTheme={colorTheme} />
      ) : null}
      <div className={styles.nav}>
        {data.map((item, index) => (
          <div
            key={index}
            className={styles.navItem}
            id={active === item ? styles.navItem_active : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsTemplate;

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <div className={styles.label}>Height</div>
        <div className={styles.value}>1.0m</div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Weight</div>
        <div className={styles.value}>13.0kg</div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Abilities</div>
        <div className={styles.value}>Overgrow</div>
      </div>
    </div>
  );
};

const Stats = ({ colorTheme }: any) => {
  return (
    <div className={styles.stats_container}>
      {[...Array(6)].map((_, index) => (
        <div className={styles.stats} key={index}>
          <div>Hp</div>
          <div
            style={{
              width: 189,
              background: "#CBCBCB",
              height: 8,
            }}
          >
            <div
              style={{
                width: 18,
                background: colorTheme,
                height: 8,
              }}
            ></div>
          </div>
          <div>60</div>
        </div>
      ))}
    </div>
  );
};
