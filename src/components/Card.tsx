import React from 'react'

interface CardProps {
    isSidebarRight: boolean;
}

const Card: React.FC<CardProps> = ({ isSidebarRight }) => {
    return (
        <div className={`card ${isSidebarRight ? "rtl-mode" : "ltr-mode "}`}>
            <h2>Task 1</h2>
            <p>Complete the React component setup.</p>
        </div>
    )
}

export default Card;