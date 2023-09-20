import React, { useEffect, useState } from 'react'
import { wrappedGet, wrappedPatch } from '../../FetchMethods'
import '../../styles/wordlist.css'

import EndorsedWord from './EndorsedWord'
import EndorsementPopup from './EndorsementPopup'


const EndorsedWordList = ({title, category}) => {
  const [promptInfoArray, setPromptInfoArray] = useState([])
  const [maxEndorsements, setMaxEndorsements] = useState(1)
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [selectedEndorsements, setSelectedEndorsements] = useState(1)

  useEffect(() => {
    updatePromptInfoArray()
  }, [])

  const updatePromptInfoArray = () => {
    wrappedGet(`category/${category}`, (promptInfoArray) => {
      setPromptInfoArray(promptInfoArray)

      const endorsementsArray = promptInfoArray.map(x => x.endorsements)
      console.log(endorsementsArray)
      let m = Math.max(...endorsementsArray)
      console.log(m)
      if (m > 1) m--
      setMaxEndorsements(m)
    })
  }

  
  const onWordClicked = (word, endorsements) => {
    console.log(word, endorsements)
    setSelectedPrompt(word)
    setSelectedEndorsements(endorsements)
  }

  const endorseSelectedPrompt = async() => {
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
          return <EndorsedWord key={index} word={prompt} endorsements={endorsements - 1} maxEndorsements={maxEndorsements}
            onClick={onWordClicked} minSizeEm={1} maxSizeEm={4} />})
        }
      </ol>
      {selectedPrompt? 
        <EndorsementPopup word={selectedPrompt} endorsements={selectedEndorsements} endorsePrompt={endorseSelectedPrompt}  />
      : null}
    </div>
  )
}

export default EndorsedWordList