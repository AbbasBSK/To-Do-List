import React, { useState } from 'react'

interface CardProps {
    isSidebarRight: boolean;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ isSidebarRight, title, description }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompleteTask = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className={`card ${isCompleted ? "completed" :""}`}>
            <h2 className={`${isSidebarRight ? "rtl-mode" : "ltr-mode "}`}>{title}</h2>
            <p>{description}</p>
            <button className={`completedBtn ${isCompleted ? "completedBtnDone" :""}`} onClick={handleCompleteTask}>
                {isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
            </button>
        </div>
    )
}


export default Card;