import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  case?: string;
  link?: boolean;
}

interface colors {
  [key: string]: string;
  dative: string;
  accusative: string;
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
  color: black;
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
  &:hover {
    transform: ${(props: Props) => (props.link ? "scale(1.1)" : "")};
  }
  margin: 1em;
  padding: 1em;
  width: 15em;
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
