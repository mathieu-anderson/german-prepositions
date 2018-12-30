import React from "react";
import { Preposition } from "./types";
import {
  Header,
  CardsWrapper,
  Card,
  CardTitle,
  CardContent
} from "./StyledComponents";

export default function AccusativePage(props: { list: Preposition[] }) {
  return (
    <React.Fragment>
      <Header>accusative</Header>
      <CardsWrapper>
        {props.list.map(prep => (
          <Card key={prep.name}>
            <CardTitle>{prep.name}</CardTitle>
            <CardContent case="accusative">{prep.accExample}</CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </React.Fragment>
  );
}
