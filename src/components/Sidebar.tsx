import React from 'react';

interface SidebarProps {
    className?: string;
    isRtl: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isRtl }) => {
    return (
        <div className={`${className} ${isRtl ? 'sidebar-right' : 'sidebar-left'}`}>
            <ul className='menu'>
                <li className='btn2'>Dashboard</li>
                <li className='btn2'>Tasks</li>
                
                <li className='btn2'>Calendar</li>
            </ul>
        </div>
    );
};

export default Sidebar;
