import React from "react";
import {
  Header,
  CardsWrapper,
  Card,
  CardTitle,
  CardContent
} from "./StyledComponents";

import { Preposition } from "./types";

export default function TwoWayPage(props: { list: Preposition[] }) {
  return (
    <React.Fragment>
      <Header>two-way</Header>
      <CardsWrapper>
        {props.list.map(prep => (
          <Card key={prep.name}>
            <CardTitle>{prep.name}</CardTitle>
            <CardContent case="dative">[dative] {prep.datExample}</CardContent>
            <CardContent case="accusative">
              [accusative] {prep.accExample}
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </React.Fragment>
  );
}
