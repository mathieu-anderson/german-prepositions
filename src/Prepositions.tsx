import React from 'react'

interface Definition {
  name: string,
  dative: boolean,
  accusative: boolean,
  datExample: string | null,
  accExample: string | null
}

interface Definitions extends Array<Definition>{}

const Prepositions = (props: { definitions: Definitions }) => {
  return (
    <div>
      <ul>
        {
          props.definitions.map(definition => <li>{definition.name}</li>)
        }
      </ul>
    </div>
  )
}

export default Prepositions;
