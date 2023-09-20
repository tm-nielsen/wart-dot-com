import React, { useEffect, useState } from 'react'
import { wrappedGet, wrappedPatch } from '../../FetchMethods'
import '../../styles/endorsements.css'

import EndorsedWord from './EndorsedWord'
import EndorsementPopup from './EndorsementPopup'


const EndorsedWordList = ({title, category}) => {
  const [promptInfoArray, setPromptInfoArray] = useState([])
  const [endorsementRange, setEndorsementRange] = useState({})
  const [endorsedWords, setEndorsedWords] = useState ([])
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [selectedEndorsements, setSelectedEndorsements] = useState(1)

  useEffect(() => {
    updatePromptInfoArray()
  }, [])

  const updatePromptInfoArray = () => {
    wrappedGet(`category/${category}`, (promptInfoArray) => {
      setPromptInfoArray(promptInfoArray)

      const endorsementsArray = promptInfoArray.map(x => x.endorsements)
      const max = Math.max(...endorsementsArray)
      const min = Math.min(...endorsementsArray)
      setEndorsementRange({min, max})
    })
  }

  
  const onWordClicked = (word, endorsements) => {
    console.log(word, endorsements)
    setSelectedPrompt(word)
    setSelectedEndorsements(endorsements)
  }

  const endorseSelectedPrompt = async() => {
    let newEndorsedWords = endorsedWords
    newEndorsedWords.push(selectedPrompt)
    setEndorsedWords(newEndorsedWords)

    await wrappedPatch('endorse', {prompt: selectedPrompt})
    setSelectedEndorsements(selectedEndorsements + 1)
    updatePromptInfoArray()
  }


  return (
    <div className="word-list-container">
      <h2 className='acc'>{title}:</h2>
      <p className='acc'>Click on a Prompt to Endorse it</p>
      <ol className="word-list main-border">
        {promptInfoArray.map((promptInfo, index) => {
          let {prompt, endorsements} = promptInfo
          return <EndorsedWord key={index} word={prompt} endorsements={endorsements} endorsementRange={endorsementRange}
            onClick={onWordClicked} minSizeEm={1} maxSizeEm={4} />})
        }
      </ol>
      {selectedPrompt? 
        <EndorsementPopup word={selectedPrompt} endorsements={selectedEndorsements}
          endorsePrompt={endorseSelectedPrompt} disabled={endorsedWords.includes(selectedPrompt)} />
      : null}
    </div>
  )
}

export default EndorsedWordList