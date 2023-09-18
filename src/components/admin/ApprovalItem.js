import React from 'react'

const ApprovalItem = ({prompt, approvePrompt, rejectPrompt, handled}) => {
  return (
    <div id='prompt-approval-item'>
      <label htmlFor="prompt-approval-item" className={handled?'acc-faded':''}>{prompt}</label>
      <div id='approval-button-container'>
        <button id='approve-button' className='approval-button' onClick={() => approvePrompt(prompt)}>Approve</button>
        <button id='reject-button' className='approval-button' onClick={() => rejectPrompt(prompt)}>Reject</button>
      </div>
    </div>
  )
}

export default ApprovalItem