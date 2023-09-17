import React from 'react'

const CategoryRadioButton = ({name, id, currentCategory, setCurrentCategory, children}) => {
  return (
    <div className="radio-button-container">
      <input type="radio" name={name} id={id} value={currentCategory === 'id'} onChange={() => setCurrentCategory(id)} />
      <label htmlFor={id} className='radio-label'>{children}</label>
    </div>
  )
}

export default CategoryRadioButton