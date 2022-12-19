import React from 'react';

function Header() {
  return (
    <>
      <div className='container-fluid header'>
        <div className='container '>
          <div className='navbarheader'>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Blogs</li>
              <img src="logo.png" className='logo' />
              <li>Our Work</li>
              <li>Our Team</li>
              <li>Contact Us</li>
              <img src='menu-bar.png' className='menu-bar' />
            </ul>
          </div>

          <div className='navtext'>
            <h5 className='text-center text-white me-5'>Feel The Coffee With work</h5>
            <h1 className='me-5'>THINK DIFFERENT,</h1>
            <h1 className='text-end'>THINK COFFEE.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;