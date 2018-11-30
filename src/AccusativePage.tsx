import React from 'react'
import { Preposition } from './types'

export default function AccusativePage(props: { list: Preposition[] }) {
  return (
    <div>
      <h3>
        Accusative
      </h3>
      {
        props.list.map(prep => (
          <React.Fragment key={prep.name}>
            <div>{prep.name}</div>
            <div>{prep.accExample}</div>
          </React.Fragment>
        ))
      }
    </div>
  )
}
