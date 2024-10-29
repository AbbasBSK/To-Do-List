import React from 'react';

interface SidebarProps {
    className?: string;
    isRtl: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isRtl }) => {
    return (
        <div className={`${className} ${isRtl ? 'sidebar-right' : 'sidebar-left'}`}>
            <ul>
                <li>Dashboard</li>
                <li>Tasks</li>
                <li>Calendar</li>
            </ul>
        </div>
    );
};

export default Sidebar;
