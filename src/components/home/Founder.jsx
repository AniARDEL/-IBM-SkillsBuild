import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };



  return (
    
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h2>Our story</h2>

        <p>
        BurgerShop was founded to create and offer burger lovers a better, 
          <br />
          more flavorful burger alternative usually only found in gourmet restaurants.
        
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
