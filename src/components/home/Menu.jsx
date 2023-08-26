// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
const Menu = () => {
  const addToCartHandler = (itemNum) => {};
  return (
    <section id="menu">
      <h2>Explore Menu</h2>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          title="Cheese Burger"
          price={10}
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          title="Royale Burger"
          price={12}
          delay={0.12}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          title="Classic Burger with French Fries"
          price={14}
          delay={0.14}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};
export default Menu;
