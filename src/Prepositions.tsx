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
          props.definitions.map(definition => {
            if (definition.dative && definition.accusative) {
              return <li style={{ color: 'coral' }}>{definition.name} [D & A]</li>
            }

            return definition.dative
              ? <li style={{ color: 'dodgerblue'}}>{definition.name} [D]</li>
              : <li style={{ color: 'teal' }}>{definition.name} [A]</li>
          })
        }
      </ul>
    </div>
  )
}

export default Prepositions;
