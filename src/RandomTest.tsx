import { sample, drabc, socrates } from './Data'
import { Test } from './Test'
import React from 'react'

const options = [sample, drabc, socrates]

export function RandomTest ():JSX.Element {
  return <Test data={options[Math.floor(Math.random() * options.length)]}/>
}
