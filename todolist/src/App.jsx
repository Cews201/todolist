import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm'


function App() {
  const [tareas, setTareas]=useState([]);//array tareas
  const agregarTarea = (tarea) =>{
    setTareas([...tareas,tarea]);
  };
  
  return (
    <div>
      <h1>Lista de tareas</h1>
      <TareaForm  agregarTarea= {agregarTarea} />
        
    </div>
  )
}

export default App
