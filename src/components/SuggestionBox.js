import React, {useState} from 'react'
import "../styles/suggestionbox.css"

const SuggestionBox = ({onSubmit, validatePrompt}) => {
  const [suggestion, setSuggestion] = useState('')
  const [error, setError] = useState('')
  const [submittedPrompt, setSubmittedPrompt] = useState('')

  var handleChange = (event) => {
    setSuggestion(event.target.value)
  }

  var handleSubmit = (event) => {
    event.preventDefault()

    let trimmedSuggestion = suggestion.trim()

    let errorMessage = validatePrompt(trimmedSuggestion)
    if (errorMessage) {
      setError(errorMessage)
      setSubmittedPrompt('')
    }
    else {
      onSubmit(trimmedSuggestion)
      setError('')
      setSubmittedPrompt(trimmedSuggestion)
    }

    setSuggestion('')
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
