import React from "react";
import { CardsWrapper } from "./StyledComponents";

import { Preposition } from "./types";
import PrepositionsCard from "./PrepositionsCard";

const Landing = (props: { list: Preposition[] }) => {
  return (
    <CardsWrapper>
      <PrepositionsCard case="accusative" list={props.list} />
      <PrepositionsCard case="dative" list={props.list} />
      <PrepositionsCard case="two-way" list={props.list} />
    </CardsWrapper>
  );
};

export default Landing;
