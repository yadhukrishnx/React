// import css

import { useState } from "react"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos,{ id: crypto.randomUUID(), title: newItem, completed:false},
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return { ...todo,completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {return currentTodos.filter(todos => todos.id !== id)})
  }
  

  return (
    <>
    <div className="main">
    <form onSubmit={handleSubmit} className="myform">
      <div className="form-row">
        <label htmlFor="item" className="labelnew">New Item</label> <br></br>
        <input 
        value={newItem}
        onChange={ e => setNewItem(e.target.value)}
        type="text"  id="inputfield" />   
      </div>
      <button className="btn">Add</button>
    </form>
    <h1 className="head">Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return <li  key={todo.id}>
          
        <label id="check1" >
          <input type="checkbox"   checked={todo.completed}
          onChange={e => toggleTodo(todo.id,e.target.checked)}
          />{todo.title}
        </label>
        
        <button 
        onClick={() => deleteTodo(todo.id)}
        className="btn-del">Delete</button>
      </li>
      })}
      
    </ul>
    </div>
    </>
  )
}