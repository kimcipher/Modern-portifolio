import React, { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = ["Home", "About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg p-4">
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        <ul className="flex space-x-4">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`${
                index === activeTab
                  ? "text-white border-b-2 border-white"
                  : "text-gray-300"
              } cursor-pointer transition duration-300 hover:text-white`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
