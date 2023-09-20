import React from 'react'

const EndorsementPopup = ({word, endorsements, endorsePrompt}) => {

  return (
    <div className='endorsement-popup'>
      <label htmlFor='endorse-button' className='endorse-label'>Endorse {word}?</label>
      <div className="flex-row endorse-row">
        <p className='endorsement-count acc'>{endorsements}</p>
        <button id='endorse-button' onClick={endorsePrompt}>+1</button>
      </div>
    </div>
  )
}

export default EndorsementPopup