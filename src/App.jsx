import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const handleAdd = () => {
    if (todo.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos]
      updatedTodos[editIndex].text = todo
      setTodos(updatedTodos)
      setEditIndex(null)
    } else {
      setTodos([...todos, { text: todo, isCompleted: false }])
    }

    setTodo("")
  }

  const handleEdit = (index) => {
    setTodo(todos[index].text)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos)
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto w-auto my-5 p-4 rounded-2xl justify-center border border-gray-300 bg-violet-100 min-h-[30vw]">
        <div className='flex justify-between gap-4'>
          <h2 className='text-xl font-bold'> Add Your Works</h2>
          <input
            type="text"
            onChange={handleChange}
            value={todo}
            className='border border-gray-500 justify-center rounded-md px-2 w-md h-10'
          />
          <button
            className='border border-gray-500 hover:border-gray-800 bg-violet-300 hover:bg-violet-700 rounded-md px-3 h-10'
            onClick={handleAdd}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <br />
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <br />

        <div className='todos space-y-4'>
          {todos.map((item, index) => (
            <div key={index} className='flex justify-between items-center p-2 bg-white rounded shadow'>
              <div className='text-gray-800'>{item.text}</div>
              <div className='space-x-2'>
                <button
                  className='border border-gray-500 hover:border-gray-800 bg-violet-300 hover:bg-violet-700 rounded-md px-3'
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className='border border-gray-500 hover:border-gray-800 bg-violet-300 hover:bg-violet-700 rounded-md px-3'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
