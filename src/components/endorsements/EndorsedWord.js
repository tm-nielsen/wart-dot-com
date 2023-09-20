import React from 'react'

const EndorsedWord = ({word, endorsements, endorsementRange, onClick, minSizeEm, maxSizeEm}) => {
  const getStyle = () => {
    const {min, max} = endorsementRange
    const range = max - min
    if (range === 0) range = 1
    
    let endorsementRatio = Math.sqrt((endorsements - min) / range)
    endorsementRatio = Math.sqrt(endorsementRatio)

    const fontSize = minSizeEm + endorsementRatio * (maxSizeEm - minSizeEm)

    return {fontSize: `max(${fontSize}em, 8px)`,
      color: `color-mix(in lch, var(--accent-col-faded), var(--main-col) ${endorsementRatio * 100}%)`}
  }

  return (
    <p className="word-list-item" onClick={() => onClick(word, endorsements)}
    style={getStyle()}>{word}</p>
  )
}

export default EndorsedWord