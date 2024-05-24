import React from 'react'

const ApprovalItem = ({prompt, approvePrompt, rejectPrompt, clearApproval, approvalState}) => {
  const getWordClassName = () => {
    let className = 'label '

    switch(approvalState) {
      case 0: return className + 'acc-faded'
      case 1: return className + 'acc'
      case -1: return className + 'main'
    }
  }
  
  return (
    <div className='prompt-approval-item'>
      <p className={getWordClassName()}>{prompt}</p>
      <div className='approval-button-container'>
        <button className='approval-button approve-button' onClick={() => approvePrompt(prompt)}>Approve</button>
        <button className='approval-button reject-button' onClick={() => rejectPrompt(prompt)}>Reject</button>
        <button className="approval-button clear-approval-button" onClick={() => clearApproval(prompt)}>X</button>
      </div>
    </div>
  )
}

export default ApprovalItem