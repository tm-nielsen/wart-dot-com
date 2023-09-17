import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AdminNavPage from './AdminNavPage'
import ApprovalPage from './ApprovalPage'
import ConfirmSelectPage from './ConfirmSelectPage'
import EditPage from './EditPage'


const AdminPageNavigator = ({pendingPrompts, commitApproved, commitRejected, confirmSelect, insertPrompt, removePrompt}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const returnToMainPage = () => setCurrentPage(0)

  let pageContent
  switch(currentPage) {
    case 0:
      pageContent = <AdminNavPage setPage={setCurrentPage} />
      break

    case 1: 
      pageContent = <ApprovalPage pendingPrompts={pendingPrompts} commitApproved={commitApproved} commitRejected={commitRejected} />
      break

    case 2:
      pageContent = <ConfirmSelectPage confirm={confirmSelect} />
      break

    case 3:
      pageContent = <EditPage insertPrompt={insertPrompt} removePrompt={removePrompt} />
      break
  }

  return (
    <>
      <div id="admin-page">
        {pageContent}
      </div>
      <div className="flex-row">
        {currentPage > 0? <a onClick={returnToMainPage}>Back</a>:null}
        <Link to='/'>Home</Link>
      </div>
    </>
  )
  
}

export default AdminPageNavigator