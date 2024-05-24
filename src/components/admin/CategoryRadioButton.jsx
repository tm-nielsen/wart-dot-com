import React from 'react'

const CategoryRadioButton = ({name, id, currentCategory, setCurrentCategory, children}) => {
  const elementId = `category-select-${id}`

  return (
    <div className="radio-button-container">
      <input type="radio" name={name} id={elementId} value={currentCategory === 'id'} onChange={() => setCurrentCategory(id)} />
      <label htmlFor={elementId} className='label radio-label'>{children}</label>
    </div>
  )
}

export default CategoryRadioButton