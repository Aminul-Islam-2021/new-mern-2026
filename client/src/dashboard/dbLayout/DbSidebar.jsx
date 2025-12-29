

import { X, Home, User, Settings, FileText, LogOut } from "lucide-react";

// DbSidebar Component
const DbSidebar = ({ isOpen, onClose }) => {
    const menuItems = [
        { icon: Home, label: "Dashboard", path: "/" },
        { icon: User, label: "Profile", path: "/profile" },
        { icon: FileText, label: "Documents", path: "/documents" },
        { icon: Settings, label: "Settings", path: "/settings" },
        { icon: Home, label: "Dashboard", path: "/" },
        { icon: User, label: "Profile", path: "/profile" },
        { icon: FileText, label: "Documents", path: "/documents" },
        { icon: Settings, label: "Settings", path: "/settings" },
        { icon: Home, label: "Dashboard", path: "/" },
        { icon: User, label: "Profile", path: "/profile" },
        { icon: FileText, label: "Documents", path: "/documents" },
        { icon: Settings, label: "Settings", path: "/settings" },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-xs z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* DbSidebar */}
            <aside
                className={`
          fixed top-0 left-0 h-full w-64 bg-gray-200 border-r border-gray-200 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:w-1/6
        `}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">My App</h2>
                        <button
                            onClick={onClose}
                            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <nav className="flex-1 overflow-y-auto p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.path}
                                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                                        onClick={onClose}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span className="font-medium">{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-2 border-t border-gray-200">
                        <div className=" flex flex-col gap-1">
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-white bg-gray-700 hover:bg-gray-300 hover:text-gray-800 rounded-lg transition-colors">
                                <Settings className="w-4 h-4" />
                                <span className="font-medium">Settings</span>

                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-white bg-gray-700 hover:bg-gray-300 hover:text-gray-800 rounded-lg transition-colors">
                                <LogOut className="w-4 h-4" />
                                <span className="font-medium">Logout</span>

                            </button>
                        </div>

                    </div>
                </div>
            </aside>
        </>
    );
};
export default DbSidebar;
