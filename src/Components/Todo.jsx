import React, { useEffect, useRef, useState } from "react";
import { FcTodoList } from "react-icons/fc";
import TodoItems from "./TodoItems";

const Todo = () => {
    
  const [todoList, setTodoList] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []);
  const inputRef = useRef();
  const add = () => {
      const inputText = inputRef.current.value.trim();

      if (inputText === "") {
        return null;
      }

        const newTodo = {
          id:Date.now(),
          text:inputText,
          isComplete:false
        }

        setTodoList((prev)=> [...prev,newTodo]);
        inputRef.current.value = "";
        
    }
    const deleteTodo = (id) => {
      setTodoList((prev) => { return prev.filter((todo) => todo.id !== id)});
    } 

    const toggle = (id) => {
      setTodoList((prev) => {
          return prev.map((todo) => {
            if(todo.id === id){
              return{...todo,isComplete: !todo.isComplete}
            }
            return todo;
          })
      });
    }
    useEffect(()=> {
      localStorage.setItem("todo",JSON.stringify(todoList))
    },[todoList])
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md p-7 min-h-[550px] rounded-xl">
      {/* ----------       title      ---------- */}

        <div className="flex mt-7 gap-2">
            <FcTodoList size={40} />
            <h1 className="text-3xl font-semibold">To-Do List</h1>
        </div>

      {/* ----------       input     ---------- */}

        <div className="flex items-center my-7 bg-gray-200 rounded-full">
            <input ref={inputRef}
              className="bg-transparent outline-none border-0 flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
              onKeyDown={(e) => {if(e.key === 'Enter') add()}}
              type="text"
              name="inputBox"
              id="inputbox"
              placeholder="Add your task"
            />
            <button onClick={add} className="bg-orange-600 border-none rounded-full h-14 w-32 text-white text-lg font-medium cursor-pointer">
                ADD
            </button>
        </div>
      {/* ----------       todo list     ---------- */}

        <div>
            {todoList.map((item,index)=>{
              return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle = {toggle}/>
            })}
        </div>
    </div>
  );
};

export default Todo;
