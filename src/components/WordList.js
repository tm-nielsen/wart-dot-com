import React from 'react'
import '../styles/wordlist.css'

const WordList = ({title, content}) => {
  if (Array.isArray(content))
  return (
    <div id="word-list-container">
      <h2>{title}:</h2>
      <ol id="word-list">
        {
          Array.isArray(content)? 
          content.map((word, index) => <p key={index} id="prompt" className='acc-faded'>{word}</p>)
          :<p className='acc'>{content}</p>
        }
      </ol>
    </div>
  )
}

export default WordList