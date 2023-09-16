import React from 'react'

import prompts from '../assets/prompts.json'

const WordList = ({title, category}) => {
  var words = prompts[category]

  return (
    <div className="word-list">
      <h3 className='acc'>{title}:</h3>
      <ol>
        {words.map((word, index) => <p key={index}>{word}</p>)}
      </ol>
    </div>
  )
}

export default WordList