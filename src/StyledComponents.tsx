import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  case?: string;
}

interface colors {
  [key: string]: string;
  dative: string;
  accusative: string;
  genitive: string;
  "two-way": string;
}

export const Header = styled.header`
  margin-bottom: 1em;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
`;

export const RouterLink = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  &:visited {
    color: black;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Card = styled.div`
  border: 1px solid black;
  margin: 1em 0;
  padding: 1em;
  min-width: 10em;
  max-width: 15em;
`;

export const CardTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export const CardContent = styled.div`
  color: ${(props: Props) => {
    const colors: colors = {
      dative: "purple",
      accusative: "green",
      genitive: "orange",
      "two-way": "black"
    };
    return props.case ? colors[props.case] : "black";
  }};
  margin-top: 1em;
`;
