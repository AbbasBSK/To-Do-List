import React, { useState } from 'react'

interface CardProps {
    isSidebarRight: boolean;
    title: string;
    description: string;
    date: Date; // تاریخ تسک
}

const Card: React.FC<CardProps> = ({ isSidebarRight, title, description, date }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);

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
            <button className={`completedBtn ${isCompleted ? "completedBtnDone" : ""}`} onClick={handleCompleteTask}>
                {isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
            </button>
            <button className='completedBtn' onClick={handlePostpone}>موکول به روز دیگر</button>
            {isPopupOpen && (
                <div className="popup">
                    <p>آیا می‌خواهید  این تسک  را به روز دیگری موکول کنید؟</p>
                    <button className='btn2' onClick={handleClosePopup}>بله</button>
                    <button className='btn2' onClick={handleClosePopup}>خیر</button>
                </div>
            )}
        </div>
    )
}


export default Card;