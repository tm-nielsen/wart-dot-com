import React, {useState, useEffect} from 'react'
import {wrappedGet, wrappedPost} from '../FetchMethods'

import ServerStatusWrapper from '../components/ServerStatusWrapper'
import WordList from '../components/WordList'
import SuggestionBox from '../components/SuggestionBox'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EndorsedWordList from '../components/endorsements/EndorsedWordList'


const Home = () => {
  const [serverStatus, setServerStatus] = useState(0)
  const [activePrompt, setActivePrompt] = useState('')
  const [currentWords, setCurrentWords] = useState([])
  const [pastWords, setPastWords] = useState(['Wating on Server'])
  const [pendingWords, setPendingWords] = useState([])


  useEffect(() => {
    if (serverStatus === 1) {
      wrappedGet('active', setActivePrompt)
      updateWordList('current', setCurrentWords)
      updateWordList('past', setPastWords)
      updateWordList('pending', setPendingWords)
    }
  }, [serverStatus])

  const updateWordList = (category, setWordList) => {
    wrappedGet(`category/${category}`, (promptInfoArray) => {
      setWordList(promptInfoArray.map(x => x.prompt))
    })
  }

  const submitPrompt = (prompt) => {
    wrappedPost('suggest', {prompt}, (response) => {
      updateWordList('pending', setPendingWords)
    })
  }

  const validatePrompt = (prompt) => {
    if (!prompt) return 'no prompt'
    if (prompt === activePrompt) return 'extant prompt'
    if (listContainsPrompt(currentWords, prompt)) return 'prompt is in current pool'
    if (listContainsPrompt(pastWords, prompt)) return 'prompt already used'
    if (listContainsPrompt(pendingWords, prompt)) return 'prompt already suggested'
    return null
  }

  const listContainsPrompt = (words, prompt) => {
    if (words.includes(prompt)) return true
    let lowerCasePrompt = prompt.toLowerCase()
    let lowerCaseWords = words.map((word) => word.toLowerCase())
    if (lowerCaseWords.includes(lowerCasePrompt)) return true
    return false
  }


  return (
    <>
      <Header showAdminLink={serverStatus === 1}/>
      <ServerStatusWrapper setExternalStatus={setServerStatus}>
        <div className="spacer"/>
        <h1 className="acc">This Week's WArt Word is:</h1>
        <p id="current-prompt">{activePrompt}</p>
        <div className="spacer"/>
        <SuggestionBox onSubmit={submitPrompt} validatePrompt={validatePrompt}/>
        <div className="spacer"/>
        <WordList title="Suggestions Pending Approval" content={pendingWords} />
        <EndorsedWordList title="Prompt Pool" category="current" />
        <WordList title="Past Prompts" content={pastWords} />
        <div className="spacer"/>
      </ServerStatusWrapper>
      <Footer/>
    </>
  )
}

export default Home
