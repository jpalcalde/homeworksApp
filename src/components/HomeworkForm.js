import React, {useState} from "react";
import '../styles/HomeworkForm.css';
import { v4 as uuidv4 } from 'uuid'

function HomeworkForm(props) {
    const [input, setInput] = useState('');
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSend = e => {
        e.preventDefault();
        const newHomework = {
            id: uuidv4(),
            text: input,
            completed: false
        };
        props.onSubmit(newHomework);
    }
    return(
        <form className='homework-form'
            onSubmit={handleSend}>
            <input
                className='homework-input'
                type="text"
                placeholder='Type a homework'
                name='text'
                onChange={handleChange}
            />
            <button className='homework-button'>
                Add Homework
            </button>
        </form>
    );
}

export default HomeworkForm;