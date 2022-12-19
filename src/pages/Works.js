import React from 'react';

function Works() {
  return (
    <>
      <div className='container-fluid works'>
        <div className='container'>
          <div className='logo d-flex flex-column align-items-center pt-2'>
            <img src='coffee-logo.png' />
            <h1 className='text-white'>Makes Our Coffee Special</h1>
          </div>

          <div className='main row p-5'>
            <div className='works1 gx-5 col-lg text-center'>
              <div className='display1 d-flex gap-5'>
                <div className='image-1'>
                  <img src='irish.jpg' />
                </div>
                <div className='worktext1'>
                  <h4 className="text-warning">Irish Coffee</h4>
                  <p>Irish coffee is a caffeinated alcoholic drink consisting of Irish whiskey.</p>
                </div>
              </div>

              <div className='display2 d-flex gap-5 pt-5'>
                <div className='image-1'>
                  <img src='caffelatte.jpeg' />
                </div>
                <div className='worktext1'>
                  <h4 className="text-warning">Caffe Latte</h4>
                  <p>Caffè latte, often shortened to just latte in English. </p>
                </div>
              </div>

              <div className='display3 d-flex gap-5 pt-5'>
                <div className='image-1'>
                  <img src='icedmocha.jpg' />
                </div>
                <div className='worktext1'>
                  <h4 className="text-warning">Iced Mocha</h4>
                  <p> First, youll whisk together sugar, cocoa powder.</p>
                </div>
              </div>

              <div className='display4 d-flex gap-5 pt-5'>
                <div className='image-1'>
                  <img src='caffemocha.jpg' />
                </div>
                <div className='worktext1'>
                  <h4 className="text-warning">Caffe Mochha</h4>
                  <p>A caffè mocha, also called mocaccino, is a chocolate-flavoured.</p>
                </div>
              </div>
            </div>

            <div className='works2 col-lg'>
              <div className='i1'>
                <img src='work2-1.jpg' />
              </div>
              <div className='i2'>
                <img src='work2-2.jpg' />
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  );
}

export default Works;