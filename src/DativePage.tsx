import React from "react";
import { Preposition } from "./types";
import {
  Header,
  CardsWrapper,
  Card,
  CardTitle,
  CardContent
} from "./StyledComponents";

export default function Dative(props: { list: Preposition[] }) {
  return (
    <React.Fragment>
      <Header>dative</Header>
      <CardsWrapper>
        {props.list.map(prep => (
          <Card key={prep.name}>
            <CardTitle>{prep.name}</CardTitle>
            <CardContent case="dative">{prep.datExample}</CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </React.Fragment>
  );
}
