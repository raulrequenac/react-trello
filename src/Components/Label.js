import React from 'react'
import './Label.css'

const labelColors = [
  ['Learning Unit', 'green'], 
  ['Kata', 'maroon'], 
  ['Example', 'cyan'], 
  ['Lab', 'yellow'], 
  ['Done!', 'fuchsia'], 
  ['Review', 'darkblue'], 
  ['Bonus', 'purple']
]

const color = (label) => {
  for (let i=0; i<labelColors.length; i++) {
    if (labelColors[i][0] === label) return labelColors[i][1]
  }
}

const Label = ({label}) => {
  return (
    <div className="Label" style={{background: `${color(label)}`}}>
      <small>{label}</small>
    </div>
  )
}

export default Label
