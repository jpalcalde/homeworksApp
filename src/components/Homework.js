import React from "react";
import '../styles/Homework.css'
import { AiOutlineCloseCircle } from "react-icons/ai";

function Homework({ id, text, completed, completeHomework, deleteHomework }) {
    return(
        <div className={completed ? 'homework-container completed' : 'homework-container'}>
            <div
                className='homework-text'
                onClick={() => completeHomework(id)}>
                {text}
            </div>
            <div
                className='homework-icon-container'
                onClick={() => deleteHomework(id)}>
                <AiOutlineCloseCircle className='homework-icon'/>
            </div>
        </div>
    );
}

export default Homework;