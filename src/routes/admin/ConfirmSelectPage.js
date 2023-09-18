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
    <div style={{marginTop: '16vh'}}>
      <h1>Select a New Active Prompt</h1>
      <p className="acc" style={{textAlign: 'center'}}>
        Warning: this will immediately replace the<br/>
        current active prompt with a new one<br/>
        <font className="main" style={{fontWeight: 'bold'}}>
          COMPLETELY AT RANDOM
        </font>
      </p>
      <button onClick={confirmSelect} disabled={disabled}>Confirm</button>
    </div>
  )
}

export default ConfirmSelectPage