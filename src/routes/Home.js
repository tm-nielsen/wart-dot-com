import React, {useState, useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import WordList from '../components/WordList'
import SuggestionBox from '../components/SuggestionBox'
import Footer from '../components/Footer'

const serverUrl = 'http://localhost:3001'

const Home = () => {
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [fetchData, error, setError] = useFetch()


  useEffect(() => {
    fetchData('active', handleResponse)
  }, [])

  const handleResponse = (data) => {
    setCurrentPrompt(data)
  }


  return (
    <>
      <h1 className="acc">This Week's WArt word is:</h1>
      <p id="current-prompt">{currentPrompt}</p>
      <div className="spacer"/>
      <SuggestionBox/>
      <div className="spacer"/>
      <WordList title="Prompt Pool" category="current" serverUrl={serverUrl} />
      <WordList title="Past Prompts" category="past" serverUrl={serverUrl} />
      <WordList title="Pending Approval" category="pending" serverUrl={serverUrl} />
      <WordList title="Test" category="nothing" serverUrl={serverUrl} />
      <div className="spacer"/>
      <Footer/>
    </>
  )
}

export default Home
