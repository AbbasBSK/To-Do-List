import React from 'react'

interface CardProps {
    isSidebarRight: boolean;
    title: string;
    description: string;
  }

const Card: React.FC<CardProps> = ({ isSidebarRight, title, description }) => {
    return (
        <div className={`card ${isSidebarRight ? "rtl-mode" : "ltr-mode "}`}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card;