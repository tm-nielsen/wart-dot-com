import React from 'react'
import { Navigate, Link, Outlet } from 'react-router-dom'
// import {wrappedGet, wrappedPost, wrappedPatch, wrappedDelete} from '../FetchMethods'
import { useAuthContext } from '../contexts/AuthContext'
import "../styles/admin.css"

// import AdminPageNavigator from '../components/admin/AdminPageNavigator'
// // import Login from '../components/admin/Login'

// import AdminPage from '../components/admin/AdminPage'
// import AdminNavPage from './admin/AdminNavPage'
// import ApprovalPage from './admin/ApprovalPage'
// import ConfirmSelectPage from '../components/admin/ConfirmSelectPage'
// import EditPage from './admin/EditPage'


const Admin = () => {
  // const [password, setPassword] = useState('')
  // const [showWrong, setShowWrong] = useState(false)
  // const [authenticated, setAuthenticated] = useState(false)
  // const [pendingWords, setPendingWords] = useState([])
  const {authorized} = useAuthContext()


  // useEffect(() => {
  //   wrappedGet('category/pending', setPendingWords)
  // }, [])

  // const onLoginSubmit = (value) => {
  //   setPassword(value)
  //   wrappedGet(`authenticate/${value}`, (response) => {
  //     setAuthenticated(response === true)
  //     setShowWrong(response !== true)
  //     setTimeout(() => setShowWrong(false), 2000)
  //   })
  // }


  // const commitPromptApproval = async(approvedPrompts, rejectedPrompts) => {
  //   console.log('committing approved prompts', approvedPrompts)
  //   await wrappedPatch('approve', {password, approvedPrompts}, logResponse)

  //   console.log('committing rejected prompts', rejectedPrompts)
  //   await wrappedPatch('reject', {password, rejectedPrompts}, (logResponse))

  //   wrappedGet('category/pending', setPendingWords)
  // }

  // const confirmSelectionOfNewPrompt = () => {
  //   console.log('selection of new active prompt confirmed')
  //   wrappedPatch('select', {password}, logResponse)
  // }

  // const insertPrompt = (prompt, category) => {
  //   console.log('inserting prompt', prompt, 'into category', category)
  //   wrappedPost('insert', {password, prompt, category}, logResponse)
  // }

  // const removePrompt = (prompt) => {
  //   console.log('removing', prompt, 'from all lists')
  //   wrappedDelete('', {password, prompt}, logResponse)
  // }

  // const overrideActivePrompt = (prompt) => {
  //   console.log('overwriting current prompt with', prompt)
  //   wrappedPatch('override', {password, prompt}, logResponse)
  // }

  // const logResponse = (response) => {
  //   console.log(response)
  // }

  if (!authorized)
    return <Navigate to='/login' />

  return (
    <>
      <div id='admin-page'>
        <Outlet />
      </div>
      <div className="flex-row">
        <Link to='/admin'>Admin</Link>
        <Link to='/'>Home</Link>
      </div>
    </>
    // <Route path='/admin' element={AdminPage}>
    //   <Route index element={<AdminPageNavigator
    //     pendingPrompts={pendingWords} commitApproval={commitPromptApproval}
    //     confirmSelect={confirmSelectionOfNewPrompt} overrideActive={overrideActivePrompt}
    //     insertPrompt={insertPrompt} removePrompt={removePrompt}
    //   />} />
    //   {/* <Route path='approve-pending' element={} />
    //   <Route path='confirm-select' element={} />
    //   <Route path='edit' element={} /> */}
    // </Route>
      // authenticated?
      // <AdminPageNavigator
      //   pendingPrompts={pendingWords} commitApproval={commitPromptApproval}
      //   confirmSelect={confirmSelectionOfNewPrompt} overrideActive={overrideActivePrompt}
      //   insertPrompt={insertPrompt} removePrompt={removePrompt}
      // />
      // :<Login onSubmit={onLoginSubmit} showWrong={showWrong} />
  )
  
}

export default Admin
