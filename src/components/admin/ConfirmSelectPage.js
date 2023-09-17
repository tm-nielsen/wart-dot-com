import React from 'react'

const ConfirmSelectPage = ({confirm}) => {
  return (
    <>
      <h1>Select a New Active Prompt</h1>
      <button onClick={confirm}>Confirm</button>
    </>
  )
}

export default ConfirmSelectPage