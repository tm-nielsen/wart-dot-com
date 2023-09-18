import React from 'react'
import '../styles/wordlist.css'

const WordList = ({title, content}) => {
  if (Array.isArray(content) && content.length > 0)
  return (
    <div id="word-list-container">
      <h2>{title}:</h2>
      <ol id="word-list">
        {content.map((word, index) =>
          <p key={index} id="prompt" className='acc-faded'>{word}</p>)
        }
      </ol>
    </div>
  )
}

export default WordList