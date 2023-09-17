import React, {useState, useEffect} from 'react'
import useGet from '../hooks/useGet'
import WordList from '../components/WordList'
import SuggestionBox from '../components/SuggestionBox'
import Footer from '../components/Footer'


const Home = ({serverUrl}) => {
  const [getData, error] = useGet(serverUrl)
  const [activePrompt, setActivePrompt] = useState('')
  const [currentWords, setCurrentWords] = useState([])
  const [pastWords, setPastWords] = useState([])
  const [pendingWords, setPendingWords] = useState([])
  const [testWords, setTestWords] = useState([])


  useEffect(() => {
    getData('active', setActivePrompt)
    getData('category/current', setCurrentWords)
    getData('category/past', setPastWords)
    getData('category/pending', setPendingWords)
    getData('category/test', setTestWords)
  }, [])

  const submitPrompt = (prompt) => {
    console.log('submitting prompt: ', prompt)

    // getData('active', setActivePrompt)
    // getData('category/pending', setPendingWords)
  }


  return (
    <>
      <h1 className="acc">This Week's WArt word is:</h1>
      <p id="current-prompt">{activePrompt}</p>
      <div className="spacer"/>
      <SuggestionBox onSubmit={submitPrompt} />
      <div className="spacer"/>
      <WordList title="Prompt Pool" content={currentWords} />
      <WordList title="Past Prompts" content={pastWords} />
      <WordList title="Pending Approval" content={pendingWords} />
      <WordList title="Test" content={testWords} />
      <div className="spacer"/>
      <Footer/>
    </>
  )
}

export default Home
