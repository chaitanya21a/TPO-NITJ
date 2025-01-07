import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaBell,
  FaHome,
  FaBriefcase,
  FaClipboardList,
  FaEnvelope,
  FaQuestionCircle,
  FaShareAlt,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Set default state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsOpen(false); // Closed for small screens
      } else {
        setIsOpen(true); // Open for medium and larger screens
      }
    };

    // Run on component mount and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (id) => {
    onNavigate(id); // Trigger navigation

    // Close sidebar for small devices
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, id: "dashboard" },
    { name: "Job Management", icon: <FaBriefcase />, id: "job-management" },
    { name: "Job Profile Management", icon: <FaBriefcase />, id: "job-management" },
    { name: "OA Management", icon: <FaClipboardList />, id: "oa-management" },
    { name: "Interview Management", icon: <FaClipboardList />, id: "interview-management" },
    { name: "Notifications", icon: <FaBell />, id: "notifications" },
    { name: "Mailbox", icon: <FaEnvelope />, id: "mailbox" },
    { name: "Help Requests", icon: <FaQuestionCircle />, id: "help-requests" },
    { name: "Experience Sharing", icon: <FaShareAlt />, id: "experience-sharing" },
    { name: "Placement Insights", icon: <FaChartBar />, id: "placement-insights" },
    { name: "Placement Policy", icon: <FaFileAlt />, id: "placement-policy" },
  ];

  return (
    <div
      className={`bg-gray-800 text-white ${
        isOpen ? "sm:w-64" : "sm:w-16"
      } sm:h-[1731.6px] flex flex-col transition-all duration-300 w-full ${
        isOpen ? "h-[700px]" : "h-10"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="bg-gray-700 p-3 focus:outline-none hover:bg-gray-600"
      >
        <FaBars />
      </button>
      <nav className="mt-4 flex flex-col space-y-4 flex-grow">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className="flex items-center space-x-4 p-3 hover:bg-gray-700 focus:outline-none"
            onClick={() => handleNavigation(item.id)}
          >
            {item.icon}
            {/* Show text only if sidebar is open or screen width is small */}
            {isOpen && <span>{item.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
