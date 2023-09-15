import React from 'react'

import clubIcon from "../assets/ClubIcon.png"

const Home = () => {
  return (
    <>
      <h1 className="acc">This Week's WArt word is:</h1>
      <p className="current-prompt">fast</p>
      <form action="">
        <label htmlFor="prompt">Suggest a Prompt: </label>
        <input type="text" name="prompt" id="prompt" />
      </form>
      <h3>Prompt Pool:</h3>
      <ol>
        {Array.from({length: 20}, (x, i) => i).map((i) => <p>word {i}</p>)}
      </ol>
      <h3>Past Prompts:</h3>
      <ol>
        {Array.from({length: 20}, (x, i) => i).map((i) => <p>word {i}</p>)}
      </ol>
      <h3>Suggestions Pending Approval</h3>
      <ol>
        {Array.from({length: 20}, (x, i) => i).map((i) => <p>word {i}</p>)}
      </ol>
      <div>
        <h1>Club Info Footer</h1>
        <a href="">
          <img src={clubIcon} alt="Game Design Club icon" className="footer-img" />
        </a>
      </div>
    </>
  )
}

export default Home
