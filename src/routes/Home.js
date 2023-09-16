import React from 'react'
import WordList from '../components/WordList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <h1 className="acc">This Week's WArt word is:</h1>
      <p id="current-prompt">fast</p>
      <form action="">
        <label htmlFor="prompt">Suggest a Prompt: </label>
        <input type="text" name="prompt" id="prompt" />
      </form>
      
      <WordList title="Prompt Pool" category="current" />
      <WordList title="Past Prompts" category="past" />
      <WordList title="Suggestions Pending Approval" category="pending" />
      
      <Footer/>
    </>
  )
}

export default Home
