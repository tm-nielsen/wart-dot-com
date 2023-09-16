import React, {useState, useEffect} from 'react'
import '../styles/wordlist.css'

const WordList = ({title, category, serverUrl}) => {
  var [words, setWords] = useState([])
  var [error, setError] = useState('')

  useEffect(() => {
    fetch(`${serverUrl}/category/${category}`)
    .then(response => response.json())
    .then(handleResponse)
    .catch(error => {
      setError('There was an issue fetching from the server')
    })
  }, [])

  let handleResponse = (data) => {
    console.log(data)
    if(Array.isArray(data)) {
      setWords(data)
      setError('')
    }
    else
      setError(data)
  }

  return (
    <div id="word-list-container">
      <h3>{title}:</h3>
      <ol id="word-list">
        {words.map((word, index) => <p key={index} id="prompt" className='acc-faded'>{word}</p>)}
        {error? <p className='acc'>{error}</p>:null}
      </ol>
    </div>
  )
}

export default WordList