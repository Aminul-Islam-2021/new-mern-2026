import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DbSidebar from "./DbSidebar";
import DbNavbar from "./DbNavbar";
import DbFooter from "./DbFooter";
const DbLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <DbSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

            {/* Main Content Area */}
            <div className="flex-1 lg:ml-[16.666%]">
                {/* Navbar */}
                <DbNavbar onMenuClick={toggleSidebar} />

                {/* Main Content with proper top margin for fixed navbar */}
                <main className="mt-16 min-h-screen p-4 md:p-6">
                    <Outlet />
                </main>

                {/* Footer */}
                <DbFooter />
            </div>
        </div>
    );
};

export default DbLayout;
