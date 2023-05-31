import React from "react";
import Tarea from "./Tarea";

const TareaLista = ({tareas,quitarTarea})=>{
    return(
        <>
        {
            tareas.map((tarea)=>(
                <Tarea
                key={tarea}
                tarea={tarea}
                quitarTarea={quitarTarea}
                />
            ))
        }
        </>

    );

};

export default TareaLista;