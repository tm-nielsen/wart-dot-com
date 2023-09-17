import React, {useState} from 'react'
import CategoryRadioButton from './CategoryRadioButton'

const EditPage = ({insertPrompt, removePrompt}) => {
  const [prompt, setPrompt] = useState('')
  const [category, setCategory] = useState('')

  const handleInsertPrompt = () => {
    insertPrompt(prompt, category)
    setPrompt('')
    setCategory('')
  }

  const handleRemovePrompt = () => {
    removePrompt(prompt)
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
        <CategoryRadioButton name='category' id='active' currentCategory={category} setCurrentCategory={setCategory}>
          Active
        </CategoryRadioButton>
      </div>

      <button onClick={handleInsertPrompt} disabled={!prompt || !category}>
        Insert
      </button>
      <button onClick={handleRemovePrompt} disabled={!prompt}>
        Remove
      </button>
    </>
  )
}

export default EditPage