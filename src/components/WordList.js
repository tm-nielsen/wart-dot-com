import React from 'react'
import '../styles/wordlist.css'

const WordList = ({title, content}) => {
  if (Array.isArray(content) && content.length > 0)
  return (
    <div className="word-list-container">
      <h2>{title}:</h2>
      <ol className="word-list">
        {content.map((word, index) =>
          <p key={index} className='word-list-item acc-faded'>{word}</p>)
        }
      </ol>
    </div>
  )
}

export default WordList