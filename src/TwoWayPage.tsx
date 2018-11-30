import React from 'react'
import { Preposition } from './types'

export default function TwoWayPage(props: { list: Preposition[] }) {
  return (
    <div>
      <h3>
        Two-way
      </h3>
      {
        props.list.map(prep => (
          <React.Fragment key={prep.name}>
            <div>this{prep.name}</div>
            <div>[Dative] {prep.datExample}</div>
            <div>[Accusative] {prep.accExample}</div>
          </React.Fragment>
        ))
      }
    </div>
  )
}
