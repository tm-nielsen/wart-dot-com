import React, {useState} from 'react'
import AdminNavPage from './AdminNavPage'
import ApprovalPage from './ApprovalPage'
import ConfirmSelectPage from './ConfirmSelectPage'
import EditPage from './EditPage'


const AdminPageNavigator = ({commitApproved, commitRejected, confirmSelect, insertPrompt, removePrompt}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const returnToMainPage = () => setCurrentPage(0)

  switch(currentPage) {
    case 0: return <AdminNavPage setPage={setCurrentPage} />
    case 1: return <ApprovalPage commitApproved={commitApproved} commitRejected={commitRejected} back={returnToMainPage} />
    case 2: return <ConfirmSelectPage confirm={confirmSelect} back={returnToMainPage} />
    case 3: return <EditPage insertPrompt={insertPrompt} removePrompt={removePrompt} back={returnToMainPage} />
  }
}

export default AdminPageNavigator