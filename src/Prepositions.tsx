import React from 'react'

interface Accusative { always: Array<string>, movement: Array<string> }
interface Dative { always: Array<string>, noMovement: Array<string> }

const Prepositions = (props: { accusative: Accusative, dative: Dative }) => {
  return (
    <div>
      <h3>Always</h3>
      <div>Accusative</div>
      <ul>
        {
          props.accusative.always.map(prep => <li>{prep}</li>)
        }
      </ul>
      <div>Dative</div>
      <ul>
        {
          props.dative.always.map(prep => <li>{prep}</li>)
        }
      </ul>
    </div>
  )
}

export default Prepositions;
