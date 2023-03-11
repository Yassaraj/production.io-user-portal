import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import styles from "../../styles/common/topnavbar.css";


const TopNavbar = ({ title, buttonName, icon }) => {
    return (
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
              {icon}
            </span>{" "}
          </div>
          <div className="Title">{title}</div>
          <div>
            <button className='navBtn'>{buttonName}</button>
          </div>
        </div>
      </header>
    );
  };

export default TopNavbar;