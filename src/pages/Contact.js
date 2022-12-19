import React from 'react';

function Contact() {
  return (
    <>
      <div className='container-fluid contact'>
        <div className='container contactus p-5'>
          
          <div className='logo d-flex flex-column align-items-center pb-5'>
            <img src='coffee-logo.png' />
            <h1 className='text-white'>Contact Us</h1>
          </div>

          <div className='con d-flex gap-5'>
            <div className='part1 d-flex flex-column gap-3'>
              <p>Just below the standard contact form, they provide a special form just for Press members, which is a nice touch and likely cuts down on the number of press requests they get through their regular contact form</p>
              <div className='detail1'>
                <div className='d-flex fs-5 gap-3' >
                  <img src='address.png' className='img-fluid'  />
                  <p> 150, A, Ghatkopar Indl Estate, Lbs Marg, Ghatkopar(west)</p>
                </div>
              </div>
              <div className='detail2'>
                <div className='callimg d-flex gap-3 align-items-center fs-4'>
                  <img src='call.png' />
                  <p> +91 - 8521245656</p>
                </div>
              </div>
              <div className='detail3 '>
              <div className='emailimg d-flex gap-3 align-items-center fs-4'>
                  <img src='email.png' />
                  <p>K@gmail.com</p>
                </div>
              </div>
            </div>

            <div className='part2'>
                <div className='form'>
                  <form className='d-flex flex-column gap-4'>
                    <div className='fname d-flex gap-5'>
                      <input type="text" placeholder='Enter Your First Name' />
                      <input type="text" placeholder='Enter Your Last Name' />
                    </div>
                    <div className='fname d-flex gap-5'>
                      <input type="text" placeholder='Enter Your First Name' />
                      <input type="text" placeholder='Enter Your Last Name' />
                    </div>
                    <textarea rows="5" cols="45"></textarea>
                    <input className='bg-warning p-2 text-dark' type="submit" value="Submit" />
                  </form>
                </div>
            </div>

          </div>
        
        </div>
      </div>
    </>
  );
}

export default Contact;