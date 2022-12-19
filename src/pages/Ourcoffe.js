import React from 'react';

function Ourcoffe() {
  return (
    <>
      <div className='container-fluid ourcoffe'>
        <div className='container'>
          <div className='logo d-flex flex-column align-items-center pt-2'>
            <img src='coffee-logo.png' />
            <h1 className='text-white'>Coffee Makes Your Day</h1>
          </div>

          <div className='coffeFeature row pt-5'>
            <div className='coffe-part1 pt-5 col-lg'>
              <div className='prt1 d-flex'>
                <div className='prt1-text'>
                  <h3>Espresso</h3>
                  <p>Coffee smells like freshly ground heaven." "Science my never come up with better.</p>
                </div>
                <div className='icon ps-2 '>
                  <img src='coffe1.png' />
                </div>
              </div>
              <div className='prt2 d-flex'>
                <div className='prt2-text'>
                  <h3>Americano</h3>
                  <p>Coffee smells like freshly ground heaven." "Science my never come up with better.</p>
                </div>
                <div className='icon ps-2'>
                  <img src='coffee2.png' />
                </div>
              </div>
              <div className='prt3 d-flex'>
                <div className='prt3-text'>
                  <h3>Robusta</h3>
                  <p>Coffee smells like freshly ground heaven." "Science my never come up with better.</p>
                </div>
                <div className='icon ps-2'>
                  <img src='coffe1.png' />
                </div>
              </div>
            </div>

            <div className='image col-lg'>
              <img src='starbucks.png' className='img-fluid' />
            </div>

            <div className='coffe-part2 col-lg pt-5 '>
              <div className='prt2 d-flex'>
                <div className='icon '>
                  <img src='coffe1.png' />
                </div>
                <div className='prt2-text1 ps-3'>
                <h3>Espresso</h3>
                  <p>Coffee smells like freshly ground heaven." "Science my never come up with better.</p>
                </div>
              </div>
              
              <div className='prt2 d-flex'>

                <div className='icon '>
                  <img src='coffee2.png' />
                </div>
                <div className='prt2-text2 ps-3'>
                  <h3>Americano</h3>
                  <p>Coffee smells like freshly ground heaven." "Science my never come up with better.</p>
                </div>
              </div>
              <div className='prt3 d-flex'>

                <div className='icon '>
                  <img src='coffe1.png' />
                </div>
                <div className='prt2-text3 ps-3'>
                  <h3>Robusta</h3>
                  <p>Coffee smells like freshly ground heaven." "Science my never come up with better.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ourcoffe;