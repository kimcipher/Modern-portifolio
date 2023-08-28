import React, { useState, useEffect } from 'react';

const Header = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ['Frontend Developer', 'UI/UX Designer', 'Analyst'];

  useEffect(() => {
    // Cycle through subtitles every 3 seconds
    const interval = setInterval(() => {
      setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img
            src="https://i.ibb.co/x5DYtZ1/DSC-1830.jpg"
            alt="Profile"
            className="header-image"
          />
          <div className="header-text">
            <h1 className="header-title">Jaffer Kimutai</h1>
            <p className="header-subtitle">{subtitles[subtitleIndex]}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
