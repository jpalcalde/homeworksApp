import React, {useState} from "react";
import HomeworkForm from "./HomeworkForm";
import '../styles/HomeworkList.css'
import Homework from "./Homework";

function HomeworkList() {
    const [homeworks, setHomeworks] = useState([])
    const addHomework = (homework) => {
        if(homework.text.trim()) {
            homework.text = homework.text.trim();
            const homeWorksUpdated = [homework, ...homeworks];
            setHomeworks(homeWorksUpdated);
        }
    }
    const deleteHomework = id => {
        const homeWorksUpdated = homeworks.filter(homework => homework.id !== id);
        setHomeworks(homeWorksUpdated);
    }
    const completeHomeWork = id => {
        const homeWorksUpdated = homeworks.map(homework => {
            if(homework.id === id) {
                homework.completed = !homework.completed;
            }
            return homework;
        });
        setHomeworks(homeWorksUpdated);
    }
    return(
        <>
            <HomeworkForm onSubmit={addHomework}/>
            <div className='homeworks-list-container'>
                {
                    homeworks.map((homework) =>
                        <Homework
                            key={homework.id}
                            id={homework.id}
                            text={homework.text}
                            completed={homework.completed}
                            completeHomework={completeHomeWork}
                            deleteHomework={deleteHomework}
                        />
                    )
                }
            </div>
        </>
    );
}

export default HomeworkList;