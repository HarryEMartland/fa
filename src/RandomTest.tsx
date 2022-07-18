import { allAcronyms } from './Data'
import { Test } from './Test'
import React from 'react'

const options = allAcronyms

export function RandomTest ():JSX.Element {
  return <Test data={options[Math.floor(Math.random() * options.length)].letters}/>
}
