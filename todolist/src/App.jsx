import { useState } from 'react'
import './App.css'
import TareaForm from './components/TareaForm'
import TareaLista from './components/TareaLista';


function App() {
  const [tareas, setTareas]=useState([]);//array tareas

  const agregarTarea = (tarea) =>{
    setTareas([...tareas,tarea]);
  };
  
const quitarTarea=(tarea)=>{
    setTareas(tareas.filter((t)=> t !== tarea))
}

  return (
    <div className='container'>
      <h1>Lista de tareas</h1>
      <TareaForm  agregarTarea= {agregarTarea} />
      <TareaLista tareas={tareas} quitarTarea={quitarTarea} />        
    </div>
  )
}

export default App
