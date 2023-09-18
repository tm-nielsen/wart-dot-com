import React, {useState} from 'react'
import ApprovalItem from './ApprovalItem'
import WordList from '../WordList'

const ApprovalPage = ({pendingPrompts, commitApproval}) => {
  const [approvedPrompts, setApprovedPrompts] = useState([])
  const [rejectedPrompts, setRejectedPrompts] = useState([])

  const handleCommit = () => {
    console.log(pendingPrompts)
    commitApproval(approvedPrompts, rejectedPrompts)
    setApprovedPrompts([])
    setRejectedPrompts([])
  }

  const approvePrompt = (prompt) => {
    if (approvedPrompts.includes(prompt)) return

    let approved = approvedPrompts
    approved.push(prompt)
    setApprovedPrompts(approved)

    setRejectedPrompts(rejectedPrompts.filter((x) => x != prompt))
  }
  
  const rejectPrompt = (prompt) => {
    if (rejectedPrompts.includes(prompt)) return

    let rejected = rejectedPrompts
    rejected.push(prompt)
    setRejectedPrompts(rejected)

    setApprovedPrompts(approvedPrompts.filter((x) => x != prompt))
  }

  return (
    <>
      <h1>Approve Pending Submissions</h1>
      {
      pendingPrompts.map((prompt, index) =>
        <ApprovalItem key={index} prompt={prompt}
          handled={approvedPrompts.includes(prompt) || rejectedPrompts.includes(prompt)}
          approvePrompt={approvePrompt} rejectPrompt={rejectPrompt} />
      )}
      <div>
        <WordList title='Approved' content={approvedPrompts} />
        <WordList title='Rejected' content={rejectedPrompts} />
      </div>
      <button onClick={handleCommit}>Commit</button>
    </>
  )
}

export default ApprovalPage