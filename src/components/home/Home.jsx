// Write all the code here

import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Testimonials from "./Testimonials";
import Menu from "./Menu";
const Home = () => {
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
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>The Burger Shop</motion.h1>
          <motion.h2
            {...options}
            transition={{
              delay: 0.1,
            }}
          >
            Give yourself a tasty burger.
          </motion.h2>
         
        </div>
        <motion.a
          href="#menu"
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          Explore Menu
        </motion.a>
      </section>
      <Menu />
      <Testimonials />
     
      
      

    </>
  );
};
export default Home;
