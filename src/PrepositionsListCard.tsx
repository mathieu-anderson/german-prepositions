import React from 'react'
import { Preposition } from './types'
import { Link } from "react-router-dom";

const PrepositionsListCard = (props: { case: string, list: Preposition[]}) => {
  const route = `/${props.case}`
  return (
      <Link to={route}>
        <h3>
          {props.case}
        </h3>
        {
          props.list.map(prep => {
            return prep[props.case]
            ? <div>{prep.name}</div>
            : null
          })
        }
      </Link>
  )
}

export default PrepositionsListCard;
