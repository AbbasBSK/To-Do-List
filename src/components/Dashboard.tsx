import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1>Dashboard</h1>
            <p>Welcome to your ToDo List Dashboard!</p>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
            }}>
                <div tabIndex={2} className="card">
                    <h2>Task 1</h2>
                    <p>Complete the React component setup.</p>
                </div>
                
                <div tabIndex={0} className="card">
                    <h2>Task 2</h2>
                    <p>Style the ToDo list for better visuals.</p>
                </div>

                <div tabIndex={0} className="card">
                    <h2>Task 3</h2>
                    <p>Add interactivity in the next steps.</p>
                </div>
                
                {/* کارت‌های اضافی برای تست */}
                <div tabIndex={0} className="card">
                    <h2>Task 4</h2>
                    <p>Review TypeScript types.</p>
                </div>
                <div tabIndex={0} className="card">
                    <h2>Task 5</h2>
                    <p>Plan out the next features.</p>
                </div>
                <div tabIndex={0} className="card">
                    <h2>Task 6</h2>
                    <p>Plan out the next features.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
