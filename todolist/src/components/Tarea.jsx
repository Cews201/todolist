import React, {useState} from "react";

const Tarea = ( {tarea, quitarTarea} ) =>{
    return(
        <div className='tarea-1'>
            <span> {tarea} </span>
            <button className='button-2' role="button" onClick={() => quitarTarea(tarea)}>
                Eliminar
            </button>
        </div>

    );

};

export default Tarea;
