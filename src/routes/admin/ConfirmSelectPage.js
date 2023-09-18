import React, { useState } from 'react'
import { wrappedPatch } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'

const ConfirmSelectPage = () => {
  const [disabled, setDisabled] = useState(false)
  const {password} = useAuthContext()

  const confirmSelect = () => {
    wrappedPatch('select', {password})
    setDisabled(true)
  }

  return (
    <>
      <h1>Select a New Active Prompt</h1>
      <button onClick={confirmSelect} disabled={disabled}>Confirm</button>
    </>
  )
}

export default ConfirmSelectPage