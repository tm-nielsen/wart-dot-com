import React from 'react'

const EndorsedWord = ({word, endorsements, endorsementRange, onClick, selected, minSizeEm, maxSizeEm}) => {
  const getStyle = () => {
    const {min, max} = endorsementRange
    let range = max - min
    if (range === 0) range = 1

    let endorsementRatio = (endorsements - min) / range
    endorsementRatio = Math.sqrt(endorsementRatio)

    const fontSize = minSizeEm + endorsementRatio * (maxSizeEm - minSizeEm)
    const colorString = `color-mix(in lch, var(--accent-col-faded), var(--main-col) ${endorsementRatio * 100}%)`

    return {fontSize: `max(${fontSize}em, 12px)`,
      color: (selected? '': colorString)}
  }

  return (
    <p className={'word-list-item ' + (selected? 'selected-word': 'selectable-word')}
      onClick={() => onClick(word, endorsements)} style={getStyle()}>{word}</p>
  )
}

export default EndorsedWord