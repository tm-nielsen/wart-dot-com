import React from 'react'
import { wrappedPatch } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'

const ConfirmSelectPage = () => {
  const {password} = useAuthContext()

  const confirmSelect = () => {
    wrappedPatch('select', {password})
  }

  return (
    <>
      <h1>Select a New Active Prompt</h1>
      <button onClick={confirmSelect}>Confirm</button>
    </>
  )
}

export default ConfirmSelectPage