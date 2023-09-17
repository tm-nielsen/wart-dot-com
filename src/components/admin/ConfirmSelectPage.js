import React from 'react'
import AdminPage from './AdminPage'

const ConfirmSelectPage = ({confirm, back}) => {
  return (
    <AdminPage title={'Select a New Active Prompt'} back={back}>
      <button onClick={confirm}>Confirm</button>
    </AdminPage>
  )
}

export default ConfirmSelectPage