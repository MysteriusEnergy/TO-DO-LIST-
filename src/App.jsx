import { useState } from 'react'
import supabase  from './SupabaseClient'
import './App.css'

function App() {
  const [newTask, setNewTask] = useState('')

  //*  CREATE TASLK 
  const addTask = async () => {
    const task = {
      name: newTask,
      is_complete: false
    }

    const {data, error} = await supabase.from ('TodoList').insert([task])

    if (error) {
      console.log("Error al crear la tarea:", error);
    } else {
      console.log("Tarea creada:", data);
    }
  }

  return (
    <>
      <h1>Todo</h1>
      <div>
        <input type="text" 
        placeholder='Agregar tarea' 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={() => addTask()}>Add</button>
      </div>
    </>
  )
}

export default App
