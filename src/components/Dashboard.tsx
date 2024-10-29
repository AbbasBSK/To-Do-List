import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Dashboard: React.FC = () => {
    const [isSidebarRight, setIsSidebarRight] = useState(false);

    return (
        <div style={{ display: 'flex' }}>
            {/* اضافه کردن پراپ isRtl */}
            <Sidebar className="sidebar" isRtl={isSidebarRight} />
            
            <div style={{ flex: 1, padding: '20px', maxWidth: '1000px', margin: '0 auto' }} className={` ${isSidebarRight ? "rtl-mode" : " ltr-mode"}`}>
                <button onClick={() => setIsSidebarRight(!isSidebarRight)} className={'btn'} >
                    {isSidebarRight ? "Move Sidebar to Left" : "Move Sidebar to Right"}
                </button>
                <h1>Dashboard</h1>
                <p>Welcome to your ToDo List Dashboard!</p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                }}>
                    <div className={`card ${isSidebarRight ? "rtl-mode" : " ltr-mode"}`}>
                        <h2>Task 1</h2>
                        <p>Complete the React component setup.</p>
                    </div>

                    <div className={`card ${isSidebarRight ? "rtl-mode" : " ltr-mode"}`}>
                        <h2>Task 2</h2>
                        <p>Style the ToDo list for better visuals.</p>
                    </div>

                    <div className={`card ${isSidebarRight ? "rtl-mode" : " ltr-mode"}`}>
                        <h2>Task 3</h2>
                        <p>Add interactivity in the next steps.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
