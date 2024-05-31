// import React from 'react'

const Header = () => {
  return (
      <nav className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <img src="path/to/logo.png" alt="Logo" />
          <ul className="flex space-x-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href ="/about">About</a>
            </li>
            <li>
              <a href ="/events">Events</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <li>
            <a href="/create">Create</a>
          </li>
          <button>Connect</button>
        </div>
      </nav>

  );
};

export default Header;
