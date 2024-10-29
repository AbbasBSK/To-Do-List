import React from 'react';

interface SidebarProps {
    className?: string;
    isRtl: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isRtl }) => {
    return (
        <div className={`${className} ${isRtl ? 'sidebar-right' : 'sidebar-left'}`}>
            <ul className='menu'>
                <li className='menu-item'>Dashboard</li>
                <li className='menu-item'>Tasks</li>
                <li className='menu-item'>Calendar</li>
            </ul>
        </div>
    );
};

export default Sidebar;
