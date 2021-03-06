import React from "react";
import ProductCardH from "../../ProductCardH";
import { Container } from "./style";
import { BuyurtmaContext } from "../../../context/buyurtma";

export const Body = () => {
  const [card] = BuyurtmaContext();

  return (
    <Container>
        {card.yangi.map((value) => (
          <ProductCardH value={value} key={value.id} />
        ))}
      
    </Container>
  );
};
export default Body;
