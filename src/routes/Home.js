import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import WordList from '../components/WordList'
import SuggestionBox from '../components/SuggestionBox'
import Footer from '../components/Footer'


const Home = () => {
  const [fetchData, error, setError] = useFetch()
  const [activePrompt, setActivePrompt] = useState('')
  const [currentWords, setCurrentWords] = useState([])
  const [pastWords, setPastWords] = useState([])
  const [pendingWords, setPendingWords] = useState([])
  const [testWords, setTestWords] = useState([])


  useEffect(() => {
    fetchData('active', setActivePrompt)
    fetchData('category/current', setCurrentWords)
    fetchData('category/past', setPastWords)
    fetchData('category/pending', setPendingWords)
    fetchData('category/test', setTestWords)
  }, [])

  const updateWords = () => {
    console.log("update active word")
    // fetchData('active', setActivePrompt)
    // fetchData('category/current', setCurrentWords)
    // fetchData('category/past', setPastWords)
    // fetchData('category/pending', setPendingWords)
  }


  return (
    <>
      <h1 className="acc">This Week's WArt word is:</h1>
      <p id="current-prompt">{activePrompt}</p>
      <div className="spacer"/>
      <SuggestionBox updateWords={updateWords}/>
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
