import React from 'react'
import { Preposition } from './types'

const PrepositionsListCard = (props: { case: string, list: Preposition[]}) => {
  return (
    <div>
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
    </div>
  )
}

export default PrepositionsListCard;
