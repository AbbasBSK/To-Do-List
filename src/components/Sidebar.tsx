import React from 'react';

interface SidebarProps {
    className?: string;
    isRtl: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isRtl }) => {
    return (
        <div className={`${className} ${isRtl ? 'sidebar-right' : 'sidebar-left'}`}>
            <ul className='menu'>
                <li className='btn'>Dashboard</li>
                <li className='btn'>Tasks</li>
                <li className='btn'>Calendar</li>
            </ul>
        </div>
    );
};

export default Sidebar;
