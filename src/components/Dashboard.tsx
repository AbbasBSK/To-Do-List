import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Card from './Card';

const Dashboard: React.FC = () => {
    const [isSidebarRight, setIsSidebarRight] = useState(false);



    return (
        <div style={{ display: 'flex' }}>
            {/* اضافه کردن پراپ isRtl */}
            <Sidebar className="sidebar" isRtl={isSidebarRight} />

            <div style={{ flex: 1, padding: '20px', maxWidth: '1000px', margin: '0 auto' }} className={` ${isSidebarRight ? "fade-move-right rtl-mode" : "fade-move-left ltr-mode"}`}>
                <div className='toggleBox'>
                    <input id='checkBox' type="checkbox" />
                    <label className='toggleLableBox' htmlFor="checkBox" onClick={() => setIsSidebarRight(!isSidebarRight)}>
                        <div className='toggleButton'>
                            <div className='scroolToggle'>
                            {isSidebarRight ? "L" : "R"}
                            </div>
                        </div>
                    </label>
                </div>
                <h1>Dashboard</h1>
                <p>Welcome to your ToDo List Dashboard!</p>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '15px',
                }}>
                    <Card isSidebarRight={isSidebarRight} />
                    <Card isSidebarRight={isSidebarRight} />
                    <Card isSidebarRight={isSidebarRight} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
