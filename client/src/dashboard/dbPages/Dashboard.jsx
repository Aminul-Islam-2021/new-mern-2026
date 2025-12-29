import React from "react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Welcome to Dashboard</h2>
        <p className="text-gray-600 mb-4">
          This is a responsive layout with a fixed navbar and sidebar. The
          sidebar automatically hides on mobile devices and can be toggled using
          the hamburger menu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-lg font-semibold mb-2">Card {item}</h3>
            <p className="text-gray-600">Sample content for card {item}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold mb-4">Additional Content</h3>
        <p className="text-gray-600 mb-4">
          The layout maintains proper spacing and scrolling behavior. Try
          resizing your browser window to see the responsive behavior in action.
        </p>
        <div className="h-96 bg-gray-50 rounded border border-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Scroll to see more content</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
