import React from 'react'
import Display from '../Display'
import Buttons from '../Buttons'
import './calculator.scss'
function Calculator() {
  return (
    <div className='calculator_container'>
      <Display/>
      <Buttons/>
    </div>
  )
}

export default Calculator