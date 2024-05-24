import React, { useEffect, useState } from 'react'
import { wrappedGet, wrappedPatch } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'

import ServerResponseDisplay from '../../components/admin/ServerResponseDisplay'


const EndorsementsPage = () => {
  const [currentPromptInfoArray, setCurrentPromptInfoArray] = useState([])
  const [currentPrompts, setCurrentPrompts] = useState([])
  const [prompt, setPrompt] = useState('')
  const [endorsements, setEndorsements] = useState(1)
  const [serverResponse, setServerResponse] = useState('')
  const {password} = useAuthContext()

  useEffect(() => {
    updatePromptInfoArray()
  }, [])

  const updatePromptInfoArray = () => {
    wrappedGet('category/current', (promptInfoArray) => {
      setCurrentPromptInfoArray(promptInfoArray)
      setCurrentPrompts(promptInfoArray.map(x => x.prompt))
    }, setServerResponse)
  }


  const setPromptEndorsements = async() => {
    await wrappedPatch('set-endorsements', {password, prompt, endorsements})
    setPrompt('')
    setEndorsements(1)
    updatePromptInfoArray()
  }

  const handlePromptChange = (event) => {
    let newPrompt = event.target.value

    let promptQuery = currentPromptInfoArray.filter(x => x.prompt.toLowerCase() === newPrompt.toLowerCase())
    if (promptQuery.length > 0) {
      let newPromptInfo = promptQuery[0]
      newPrompt = newPromptInfo.prompt
      setEndorsements(newPromptInfo.endorsements)
    }
    setPrompt(newPrompt)
  }

  const handleEndorsementsChange = (event) => {
    let value = parseInt(event.target.value.replace(/\D/, ''))
    if (value)
      setEndorsements(value)
    else
      setEndorsements('')
  }

  const shouldDisableActionButton = () => {
    if (!currentPromptInfoArray.map(x => x.prompt).includes(prompt))
      return true
    return !endorsements
  }

  return (
    <>
      <h1>Edit Endorsement Level</h1>
      <h2>Target Prompt</h2>
      <input type='text' id='target-prompt-field' className='text-field shadow input-margin' placeholder='enter prompt'
        value={prompt} onChange={handlePromptChange} />

      <h2>Endorsements</h2>
      <input type="text" inputMode='numeric' pattern='[0-9]*' className='text-field shadow input-margin' placeholder='--1--'
        value={endorsements} onChange={handleEndorsementsChange}/>

      <button onClick={setPromptEndorsements}
        disabled={shouldDisableActionButton()}
        >Set Endorsements</button>

      <ServerResponseDisplay response={serverResponse} />
    </>
  )
}

export default EndorsementsPage