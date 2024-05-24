import React, { useState } from 'react'
import { wrappedPatch } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'
import ServerResponseDisplay from '../../components/admin/ServerResponseDisplay'

const ConfirmSelectPage = () => {
  const [disabled, setDisabled] = useState(false)
  const [serverResponse, setServerResponse] = useState('')
  const {password} = useAuthContext()

  const confirmSelect = () => {
    if (confirm('Warning:\nThis will immediately replace the currently active prompt AT RANDOM')) {
      wrappedPatch('select', {password}, setServerResponse)
      setDisabled(true)
    } 
  }

  return (
    <div style={{marginTop: '16vh'}}>
      <h1>Select a New Active Prompt</h1>
      <button onClick={confirmSelect} disabled={disabled}>Confirm</button>
      <ServerResponseDisplay response={serverResponse} />
    </div>
  )
}

export default ConfirmSelectPage