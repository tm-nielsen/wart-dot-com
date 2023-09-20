import React from 'react'

const EndorsedWord = ({word, endorsements, maxEndorsements, onClick, minSizeEm, maxSizeEm}) => {
  const getStyle = () => {
    const endorsementRatio = Math.sqrt(endorsements / maxEndorsements)
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