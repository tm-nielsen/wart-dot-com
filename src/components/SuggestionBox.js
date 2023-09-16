import React from 'react'
import { useState } from 'react'

const SuggestionBox = () => {
  const [suggestion, setSuggestion] = useState('')
  const [error, setError] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')

  var handleChange = (event) => {
    setSuggestion(event.target.value)
  }

  var handleSubmit = (event) => {
    event.preventDefault()

    if (suggestionIsValid()) {
      submitPrompt(suggestion)
      setError('')
      setSubmittedPrompt(suggestion)
      setTimeout(() => setSubmittedPrompt(''), 3000)
    }

    setSuggestion('')
  }

  var suggestionIsValid = () => {
    if (!suggestion) {
      setError('no prompt')
      return false
    }
    return true
  }

  var submitPrompt = (prompt) => {
    console.log(prompt)
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
      <label>
        Suggest a Prompt:
        <input placeholder="enter prompt" value={suggestion} onChange={handleChange}/>
      </label>
    </form>
    {error? <h1>Error: {error}</h1>: <></>}
    {submittedPrompt? <h1 className='acc'>"{submittedPrompt}" submitted</h1>: <></>}
    </>
  )
}

export default SuggestionBox
