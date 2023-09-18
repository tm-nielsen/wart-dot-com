import React, {useState, useEffect} from 'react'
import { wrappedGet, wrappedPatch } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'
import ApprovalItem from '../../components/admin/ApprovalItem'
import WordList from '../../components/WordList'

const ApprovalPage = () => {
  const [pendingPrompts, setPendingPrompts] = useState([])
  const [approvedPrompts, setApprovedPrompts] = useState([])
  const [rejectedPrompts, setRejectedPrompts] = useState([])
  const {password} = useAuthContext()


  const updatePendingPromptList = () => {
    wrappedGet('category/pending', setPendingPrompts)
  }
  useEffect(() => {
    updatePendingPromptList()
  }, [])

  const commitApproval = async() => {
    await wrappedPatch('approve', {password, approvedPrompts})
    await wrappedPatch('reject', {password, rejectedPrompts})
    setApprovedPrompts([])
    setRejectedPrompts([])
    updatePendingPromptList()
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
      <button onClick={commitApproval}>Commit</button>
    </>
  )
}

export default ApprovalPage