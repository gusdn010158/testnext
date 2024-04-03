import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import styles from "./main.module.css";
function Motion() {
  const divRef = useRef(null);
  return (
    <motion.div
      ref={divRef}
      className={styles.box}
      initial={{ opacity: 0.2 }}
      whileInView={{
        opacity: 1,
        rotate: [0, 360],
        borderRadius: ["20%", "50%"],
        transition: { delay: 0.05 },
      }}
      whileHover={{
        scale: 1.2,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      🤟😎🤟
    </motion.div>
  );
}

export default Motion;
