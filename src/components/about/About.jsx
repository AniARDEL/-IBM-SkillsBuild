import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>The Burger Shop</h4>
          <p>
            This is The Burger Shop. The place for the most tasty burgers on the entire
            earth.
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see the
            menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Nelson</h3>
            </div>
            <p>
              The vision for this venture was simple yet profound: to transcend the ordinary and transform it into the extraordinary. At our establishment, we believe that food is more than sustenance; it's an expression of artistry and love. Every element, from the locally sourced ingredients to the meticulous preparation, is a testament to our commitment to quality.
              <br />
              Cheers to flavor, to life, and to you.
              <br />
              <br />
              <strong>Warmly,</strong>
              <br />
              Nelson
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
