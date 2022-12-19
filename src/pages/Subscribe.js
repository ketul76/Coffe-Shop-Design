import React from 'react';

function Subscribe() {
  return (
    <>
      <div className='container-fluid subscribes p-5' >
        <div className='container subscribe '>
          <div className='subscriber d-flex justify-content-center align-items-center p-3  gap-5'>
            <div className='subscribe1 d-flex align-items-center gap-3'>
              <img src='newsletter.webp' />
              <h4>Subscribe to Our Newsletter</h4>
            </div>
            <div className='subscribe1'>
              <input className='p-2' type='email' placeholder='Enter Your Email ' />
              <button className='p-2 bg-warning text-white'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;