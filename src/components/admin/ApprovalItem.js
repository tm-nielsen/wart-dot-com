import React from 'react'

const ApprovalItem = ({prompt, approvePrompt, rejectPrompt}) => {
  return (
    <div className="flex-row" id='prompt-approval-item'>
      <label htmlFor="prompt-approval-item">{prompt}</label>
      <button id='approve-button' onClick={() => approvePrompt(prompt)}>Approve</button>
      <button id='approve-button' onClick={() => rejectPrompt(prompt)}>Reject</button>
    </div>
  )
}

export default ApprovalItem