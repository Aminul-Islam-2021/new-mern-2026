import { Menu } from "lucide-react";
const DbNavbar = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 right-0 left-0 lg:left-[16.666%] bg-teal-300 border-b border-gray-200 z-30 h-16">
      <div className="flex items-center justify-between h-full px-2 text-white">
        {/* Left side - Hamburger Menu (Mobile) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Center - Page Title */}
        <div className="flex-1 text-center lg:text-left lg:ml-4">
          <h1 className="text-lg font-semibold text-white">Dashboard</h1>
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-white">john@example.com</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            JD
          </div>
        </div>
      </div>
    </nav>
    // </div>
  );
};

export default DbNavbar;
