import React from "react";
import { Preposition } from "./types";
import { Card, CardTitle, CardContent, RouterLink } from "./StyledComponents";

const PrepositionsCard = (props: { case: string; list: Preposition[] }) => {
  const route = `/${props.case}`;
  return (
    <RouterLink to={route}>
      <Card link>
        <CardTitle>{props.case}</CardTitle>
        <CardContent case={props.case}>
          {props.list.map(prep => {
            return prep[props.case] ? <div>{prep.name}</div> : null;
          })}
        </CardContent>
      </Card>
    </RouterLink>
  );
};

export default PrepositionsCard;
