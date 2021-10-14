import React from "react";
import { motion } from "framer-motion";
import style from "./BounceKapusta.module.scss";
import sprite from "../../images/icons/kapustaSprite.svg";

export default function Loader() {
  const bounceVariants = {
    animationOne: {
      x: [-75, 75],
      y: [0, -140],
      rotate: [-40, 120],
      transition: {
        x: {
          yoyo: Infinity,
          duration: 0.5,
        },
        y: {
          yoyo: Infinity,
          duration: 0.25,
          ease: "easeOut",
        },
        rotate: {
          yoyo: Infinity,
          duration: 0.5,
        },
      },
    },
  };
  const svgVariants = {
    animationOne: {
      fill: ["#11bd3e", "#DFE2EB"],
      transition: {
        fill: {
          yoyo: Infinity,
          duration: 0.31,
        },
      },
    },
  };
  return (
    <motion.div className={style.shadow}>
      <motion.div
        variants={bounceVariants}
        animate="animationOne"
        className={style.div}
      >
        <motion.svg
          variants={svgVariants}
          width="45"
          height="45"
          fill="#DFE2EB"
        >
          <use href={sprite + "#kapusta"}></use>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
