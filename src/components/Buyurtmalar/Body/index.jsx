import React from "react";
import ProductCard from "../../ProductCard";
import { Container, Wrapper } from "./style";
import { card } from "../../../mock/card";

export const Body = () => {
  return (
    <Container>
      <Wrapper>
        {card.yangi.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.qabul.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.jonatilgan.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {card.yopilgan.map((value) => (
          <ProductCard value={value} key={value.id} />
        ))}
      </Wrapper>
    </Container>
  );
};
export default Body;