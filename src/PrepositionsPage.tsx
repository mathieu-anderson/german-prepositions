import React from 'react'

import { Preposition } from './types'
import PrepositionsListCard from './PrepositionsListCard'

const PrepositionsPage = (props: { list: Preposition[] }) => {
  return (
    <div>
      <PrepositionsListCard case='accusative' list={props.list} />
      <PrepositionsListCard case='dative' list={props.list} />
      <PrepositionsListCard case='two-way' list={props.list} />
    </div>
  )
}

export default PrepositionsPage;
