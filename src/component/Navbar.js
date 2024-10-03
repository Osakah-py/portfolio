import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';

import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">My Website</a>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="nav-menu-btn">Menu</button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="dropdown-content">
            <DropdownMenu.Item className="dropdown-item">
              <a href="/profile">Profile</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown-item">
              <a href="/settings">Settings</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown-item">
              <a href="/logout">Logout</a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Navbar;
