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


  useEffect(() => {
    updatePendingPromptList()
  }, [])

  const updatePendingPromptList = () => {
    wrappedGet('category/pending', (promptInfoArray) => {
      setPendingPrompts(promptInfoArray.map(x => x.prompt))
    })
  }


  const commitApproval = async() => {
    if (approvedPrompts.length > 0)
      await wrappedPatch('approve', {password, approvedPrompts})
    if (rejectedPrompts.length > 0)
      await wrappedPatch('reject', {password, rejectedPrompts})
    setApprovedPrompts([])
    setRejectedPrompts([])
    updatePendingPromptList()
  }

  const approveAll = () => {
    setApprovedPrompts(pendingPrompts)
    setRejectedPrompts([])
  }

  const rejectAll = () => {
    setRejectedPrompts(pendingPrompts)
    setApprovedPrompts([])
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

  const clearApproval = (prompt) => {
    setApprovedPrompts(approvedPrompts.filter((x) => x != prompt))
    setRejectedPrompts(rejectedPrompts.filter((x) => x != prompt))
  }


  const getPromptApprovalState = (prompt) => {
    if (approvedPrompts.includes(prompt)) return 1
    if (rejectedPrompts.includes(prompt)) return -1
    return 0
  }


  return (
    <>
      <h1>Approve Pending Submissions</h1>
      <div className='flex-row'>
        <button className='approval-button approve-button' onClick={approveAll}>Approve All</button>
        <button className='approval-button reject-button' onClick={rejectAll}>Reject All</button>
      </div>
      {
      pendingPrompts.map((prompt, index) =>
        <ApprovalItem key={index} prompt={prompt}
          approvalState={getPromptApprovalState(prompt)}
          approvePrompt={approvePrompt} rejectPrompt={rejectPrompt} clearApproval={clearApproval}/>
      )}
      <div>
        <WordList title='Approved' content={approvedPrompts} />
        <WordList title='Rejected' content={rejectedPrompts} />
      </div>
      <button onClick={commitApproval} disabled={approvedPrompts.length === 0 && rejectedPrompts.length === 0}>Commit</button>
    </>
  )
}

export default ApprovalPage