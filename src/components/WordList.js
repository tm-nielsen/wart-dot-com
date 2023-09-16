import React from 'react'
import '../styles/wordlist.css'

import prompts from '../assets/prompts.json'

const WordList = ({title, category}) => {
  var words = prompts[category]

  return (
    <div id="word-list-container">
      <h3>{title}:</h3>
      <ol id="word-list">
        {words.map((word, index) => <p key={index} id="prompt" className='acc-faded'>{word}</p>)}
      </ol>
    </div>
  )
}

export default WordList