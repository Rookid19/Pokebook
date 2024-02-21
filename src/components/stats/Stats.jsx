/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./Stats.module.css";
import { RiArrowLeftLine } from "react-icons/ri";
import Image from "next/image";
import useModal from "../modal/Modal";
import { useSelector } from "react-redux";
import { pokemonsDescriptions } from "@/slices/pokemonSlice";
import ColorThief from "colorthief";

function StatsTemplate() {
  const data = ["About", "Stats", "Similar"];

  const [active, setActive] = useState(data[0]);

  const { colorTheme, pokename, handleCloseModal } = useModal();

  const pokemonsDescription = useSelector(pokemonsDescriptions); // {name: 'bulbasaur', abilities: [], cries:{}, .....}

  const [rgb, setRgb] = React.useState([]);

  function getDominantColor(imageUrl, callback) {
    const img = document.createElement("IMG");
    const colorThief = new ColorThief();
    img.setAttribute("src", imageUrl);
    img.crossOrigin = "Anonymous";
    if (img.complete) {
      callback(colorThief.getColor(img));
    } else {
      img.addEventListener("load", function () {
        callback(colorThief.getColor(img));
      });
    }
  }

  useEffect(() => {
    getDominantColor(
      pokemonsDescription?.[pokename]?.sprites.other.dream_world.front_default,
      setRgb
    );
  }, []);

  useEffect(() => {
    console.log("xxx", rgb);
  }, [rgb]);

  return (
    <div className={styles.container}>
  
      <div style={{ paddingTop: 20 }}>
        <div
          className={styles.card}
          style={{
            background: `linear-gradient(180deg,rgb(${rgb?.map(
              (v) => v + 30
            )}) 0%, rgb(${rgb?.map((v) => v - 30)}) 100%)`,
          }}
        ></div>
        <div className={styles.back} onClick={handleCloseModal}>
          <RiArrowLeftLine size={24} />
        </div>
      </div>
      <div className={styles.image}>
        <Image
          // src={
          //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg"
          // }
          src={
            pokemonsDescription?.[pokename]?.sprites.other.dream_world
              .front_default
          }
          width={250}
          height={250}
          alt="pokemon"
        />
      </div>
      <div className={styles.name}>{pokename}</div>
      <div className={styles.abilities}>
        {pokemonsDescription?.[pokename]?.types[0] && (
          <div className={styles.ability}>
            {pokemonsDescription?.[pokename]?.types[0]?.type.name}
          </div>
        )}
        {pokemonsDescription?.[pokename]?.types[1] && (
          <div className={styles.ability}>
            {pokemonsDescription?.[pokename]?.types[1]?.type.name}
          </div>
        )}
      </div>
      <div className={styles.title}>About</div>

      {active === "About" ? (
        <About pokemonsDescription={pokemonsDescription} pokename={pokename} />
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

const About = ({ pokemonsDescription, pokename }) => {
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <div className={styles.label}>Height</div>
        <div className={styles.value}>
          {pokemonsDescription?.[pokename]?.height}m
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Weight</div>
        <div className={styles.value}>
          {" "}
          {pokemonsDescription?.[pokename]?.weight.toFixed(1)}
          kg
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.label}>Abilities</div>
        <div className={styles.value}>Overgrow</div>
        {/* <div className={styles.value}>
          {pokemonsDescription?.[pokename]?.abilities.map((ability, index) => (
            <div key={index}>{ability.ability.name}</div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

const Stats = ({ colorTheme }) => {
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
