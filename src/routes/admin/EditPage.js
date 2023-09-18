import React, {useState} from 'react'
import { wrappedPost, wrappedPatch, wrappedDelete } from '../../FetchMethods'
import { useAuthContext } from '../../contexts/AuthContext'
import CategoryRadioButton from '../../components/admin/CategoryRadioButton'

const EditPage = () => {
  const [prompt, setPrompt] = useState('')
  const [category, setCategory] = useState('')
  const {password} = useAuthContext()

  const insertPrompt = () => {
    wrappedPost('insert', {password, prompt, category})
    setPrompt('')
    setCategory('')
  }

  const removePrompt = () => {
    wrappedDelete('', {password, prompt})
    setPrompt('')
  }

  const overrideActivePrompt = () => {
    wrappedPatch('override', {password, prompt})
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

      <button onClick={insertPrompt} disabled={!prompt || !category}>
        Insert
      </button>
      <button onClick={removePrompt} disabled={!prompt}>
        Remove
      </button>
      <button onClick={overrideActivePrompt} disabled={!prompt}>
        Override Active
      </button>
    </>
  )
}

export default EditPage