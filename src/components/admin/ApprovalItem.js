import React from 'react'

const ApprovalItem = ({prompt, approvePrompt, rejectPrompt, handled}) => {
  return (
    <div className='prompt-approval-item'>
      <p className={'label ' + (handled?'acc-faded':'')}>{prompt}</p>
      <div className='approval-button-container'>
        <button className='approve-button' onClick={() => approvePrompt(prompt)}>Approve</button>
        <button className='reject-button' onClick={() => rejectPrompt(prompt)}>Reject</button>
      </div>
    </div>
  )
}

export default ApprovalItem