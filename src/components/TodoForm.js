import React from 'react'

const TodoForm = (props) => {
  return (
    <form style={{ display: 'flex', justifyContent: 'space-around', width:'100%' }} onSubmit={props.handleSubmit}>
        <input type ="text" value={props.todo} onChange={(e) =>props.setTodo(e.target.value)}></input>
        <button style={{ border: 'none', padding: '10px', borderRadius:'20px', margin: '0 5px' }} onClick={props.handle}>
          {props.editId ? "Edit" : "GO"}
        </button>
    </form>
  )
}

export default TodoForm
