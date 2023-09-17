import React from 'react'
import { useState } from 'react'

const SuggestionBox = ({onSubmit}) => {
  const [suggestion, setSuggestion] = useState('')
  const [error, setError] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')

  var handleChange = (event) => {
    setSuggestion(event.target.value)
  }

  var handleSubmit = (event) => {
    event.preventDefault()

    let trimmedSuggestion = suggestion.trim()

    if (promptIsValid(trimmedSuggestion)) {
      onSubmit(trimmedSuggestion)
      setError('')
      setSubmittedPrompt(trimmedSuggestion)
      setTimeout(() => setSubmittedPrompt(''), 3000)
    }

    setSuggestion('')
  }

  var promptIsValid = (prompt) => {
    if (!prompt) {
      setError('no prompt')
      return false
    }
    return true
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
