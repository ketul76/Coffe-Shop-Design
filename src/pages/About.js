import React from 'react';

function About() {
  return (
    <>
      <div className='container-fluid about'>
        <div className='container p-5'>
          <div className='about1 flex-md-wrap flex-sm-wrap d-flex flex-lg-nowrap gap-5 pb-5 pt-2'>
            <div className='coffe1'>
              <h2>Cappusino Coffee</h2>
            </div>
            <div className='coffe2'>
              <h2 className='mt-5'>Hot Coffee</h2>
            </div>
            <div className='coffe3'>
              <h2 className=''>Mocha Coffee</h2>
            </div>
          </div>

          <div className='about2'>
            <div className='logo d-flex flex-column align-items-center pt-2'>
              <img src='coffee-logo.png' />
              <h1 className='text-white'>About Cafe</h1>
            </div>

            <div className='abouttext p-5'>
              <h5 className='text-warning'>Because you can never <br/> have too much coffee in your life.</h5>
              <p className='text-white'>A place for friends, art, and more.A place for friends, art. <br/>A place for friends, art, and more.A place for friends, art, and more . <br/>If you love coffee, this is where you belong. 
              Stop settling for less, have <br/> an affair with our café. Stop settling for less, have an affair with our café. 
              </p>
              <h5 className='text-warning'>Read More about this </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;