import React, {useState} from 'react'
import { wrappedPost, wrappedPatch, wrappedDelete } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'

import CategoryRadioButton from '../../components/admin/CategoryRadioButton'
import ServerResponseDisplay from '../../components/admin/ServerResponseDisplay'


const EditPage = () => {
  const [prompt, setPrompt] = useState('')
  const [category, setCategory] = useState('')
  const [serverResponse, setServerResponse] = useState('')
  const {password} = useAuthContext()

  const insertPrompt = () => {
    wrappedPost('insert', {password, prompt, category}, setServerResponse)
    setPrompt('')
    setCategory('')
  }

  const removePrompt = () => {
    wrappedDelete('', {password, prompt}, setServerResponse)
    setPrompt('')
  }

  const overrideActivePrompt = () => {
    wrappedPatch('override', {password, prompt}, setServerResponse)
    setPrompt('')
  }

  const handlePromptChange = (event) => {
    setPrompt(event.target.value)
  }

  return (
    <>
      <h1>Edit Prompt Lists</h1>
      <h2>Target Prompt</h2>
      <input type='text' id='target-prompt-field' className='text-field shadow input-margin' placeholder='enter prompt'
        value={prompt} onChange={handlePromptChange} />

      <h2>Category</h2>
      <div className='flex-row input-margin'>
        <CategoryRadioButton name='category' id='current' currentCategory={category} setCurrentCategory={setCategory}>
          Current
        </CategoryRadioButton>
        <CategoryRadioButton name='category' id='past' currentCategory={category} setCurrentCategory={setCategory}>
          Past
        </CategoryRadioButton>
      </div>

      <button className='edit-page-button' onClick={insertPrompt} disabled={!prompt || !category}>
        Insert
      </button>
      <button className='edit-page-button' onClick={removePrompt} disabled={!prompt}>
        Remove
      </button>
      <button className='edit-page-button' onClick={overrideActivePrompt} disabled={!prompt}>
        Override Active
      </button>
      <ServerResponseDisplay response={serverResponse} />
    </>
  )
}

export default EditPage