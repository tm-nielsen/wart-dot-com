import React, {useState} from 'react'

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
        <input type="radio" name="category" className='radio-button' id="current"
          value={category === 'current'} onChange={() => setCategory('current')}/>
        <label htmlFor="current" className='radio-label'>Current</label>
        <input type="radio" name="category" className='radio-button' id="past"
          value={category === 'past'} onChange={() => setCategory('past')}/>
        <label htmlFor="past" className='radio-label'>Past</label>
        <input type="radio" name="category" className='radio-button' id="active"
          value={category === 'active'} onChange={() => setCategory('active')}/>
        <label htmlFor="active" className='radio-label'>Active</label>
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