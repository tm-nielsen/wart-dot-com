import React, {useState} from 'react'
import "../styles/suggestionbox.css"

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
    <form action="" onSubmit={handleSubmit} id='suggestion-form' className='flex-row' >
      <label id='suggestion-label'>
        Suggest a Prompt:
      </label>
      <input id='suggestion-field' className='shadow'
        placeholder="enter prompt" value={suggestion} onChange={handleChange}/>
    </form>
    {error? <p className='message'>Error: {error}</p>: <></>}
    {submittedPrompt? <p className='message acc'>"{submittedPrompt}" submitted</p>: <></>}
    </>
  )
}

export default SuggestionBox
