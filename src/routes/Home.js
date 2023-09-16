import React from 'react'
import WordList from '../components/WordList'
import SuggestionBox from '../components/SuggestionBox'
import Footer from '../components/Footer'

const serverUrl = 'http://localhost:3001'

const Home = () => {
  return (
    <>
      <h1 className="acc">This Week's WArt word is:</h1>
      <p id="current-prompt">fast</p>
      <div className="spacer"/>
      <SuggestionBox/>
      <div className="spacer"/>
      <WordList title="Prompt Pool" category="current" serverUrl={serverUrl} />
      <WordList title="Past Prompts" category="past" serverUrl={serverUrl} />
      <WordList title="Pending Approval" category="pending" serverUrl={serverUrl} />
      <div className="spacer"/>
      <Footer/>
    </>
  )
}

export default Home
