import React, {useState, useEffect} from 'react'
import {wrappedGet, wrappedPost} from '../FetchMethods'
import WordList from '../components/WordList'
import SuggestionBox from '../components/SuggestionBox'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Home = () => {
  const [serverStatus, setServerStatus] = useState(false)
  const [activePrompt, setActivePrompt] = useState('')
  const [currentWords, setCurrentWords] = useState([])
  const [pastWords, setPastWords] = useState([])
  const [pendingWords, setPendingWords] = useState([])


  useEffect(() => {
    wrappedGet('status', setServerStatus)
    wrappedGet('active', setActivePrompt)
    wrappedGet('category/current', setCurrentWords)
    wrappedGet('category/past', setPastWords)
    wrappedGet('category/pending', setPendingWords)
  }, [])

  const submitPrompt = (prompt) => {
    console.log('submitting prompt: ', prompt)
    
    wrappedPost('suggest', {prompt}, (response) => {
      console.log(response)

      wrappedGet('category/pending', setPendingWords)
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
      <Header showAdminLink={serverStatus}/>
      {serverStatus? <>
        <div className="spacer"/>
        <h1 className="acc">This Week's WArt Word is:</h1>
        <p id="current-prompt">{activePrompt}</p>
        <div className="spacer"/>
        <SuggestionBox onSubmit={submitPrompt} validatePrompt={validatePrompt}/>
        <div className="spacer"/>
        <WordList title="Suggestions Pending Approval" content={pendingWords} />
        <WordList title="Prompt Pool" content={currentWords} />
        <WordList title="Past Prompts" content={pastWords} />
        <div className="spacer"/>
      </>:
      <div style={{height: '60vh'}}>
        <h1>Server Offline</h1>
      </div>
      }
      <Footer/>
    </>
  )
}

export default Home
