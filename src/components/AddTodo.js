import React from 'react'
import './style.css'
function AddTodo() {
  return (
   <div className='add-todo__container'>
    <input type="text" name="value" placeholder='Add todo' id='add-todo__input'/>
    <input type="submit" name='submit' value="Add" className='add-todo__button'/>
   </div>
  )
}

export default AddTodo