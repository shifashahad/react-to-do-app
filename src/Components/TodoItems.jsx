import React from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { FaRegCircle, FaTrashCan } from 'react-icons/fa6'

const TodoItems = ({text ,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 px-1'>
        <div onClick={()=>{toggle(id)}} className='flex items-center flex-1 cursor-pointer'>
          {isComplete ? <FaRegCheckCircle size={26} className='text-orange-500 pt-[4px]'/> : <FaRegCircle className='text-orange-500  pt-[4px]' size={26}/> }
          <p className='text-slate-700 ml-2 text-[17px]'>{text}</p>
        </div>

        <FaTrashCan onClick={()=>{deleteTodo(id)}} className='cursor-pointer text-slate-500 hover:text-red-500'/>
    </div>
  )
}

export default TodoItems