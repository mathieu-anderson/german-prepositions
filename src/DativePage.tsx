import React, { Fragment } from 'react'
import { Preposition } from './types'

export default function Dative(props: { list: Preposition[] }) {
  return (
    <div>
      <h3>
        Dative
      </h3>
      {
        props.list.map(prep => (
          <React.Fragment key={prep.name}>
            <div>{prep.name}</div>
            <div>{prep.datExample}</div>
          </React.Fragment>
        ))
      }
    </div>
  )
}
