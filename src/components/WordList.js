import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import '../styles/wordlist.css'

const WordList = ({title, category}) => {
  var [words, setWords] = useState([])
  var [fetchData, error, setError] = useFetch()

  useEffect(() => {
    fetchData(`category/${category}`, handleResponse)
  }, [])

  const handleResponse = (data) => {
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
        {error? <p className='acc'>{error}</p>
        :words.map((word, index) => <p key={index} id="prompt" className='acc-faded'>{word}</p>)}
      </ol>
    </div>
  )
}

export default WordList