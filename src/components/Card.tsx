import React, { useState } from 'react'

interface CardProps {
    isSidebarRight: boolean;
    title: string;
    description: string;
    date: string; // تاریخ تسک
}

const Card: React.FC<CardProps> = ({ isSidebarRight, title, description }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCompleteTask = () => {
        setIsCompleted(!isCompleted);
    };

    const handlePostpone = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <div className={`card ${isCompleted ? "completed" : ""}`}>
            <h2 className={`${isSidebarRight ? "rtl-mode" : "ltr-mode "}`}>{title}</h2>
            <p>{description}</p>
            <div className='btnBox'>

                <button className={`completedBtn ${isCompleted ? "completedBtnDone" : ""}`} onClick={handleCompleteTask}>
                    {isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
                </button>
                <button className='completedBtn' onClick={handlePostpone}>To another day</button>
            </div>


            <div className={`popup ${isPopupOpen && "opacityOn"}`}>
                <p>Do you want to postpone this task to another day?</p>
                <button className='btn2' onClick={handleClosePopup}>yes</button>
                <button className='btn2' onClick={handleClosePopup}>no</button>
            </div>
        </div>
    )
}


export default Card;