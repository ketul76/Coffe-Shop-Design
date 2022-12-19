import React from 'react';

function Blog() {
  return (
    <>
      <div className='container-fluid blogs '>
        <div className='container blog p-5'>
          <div className='logo d-flex flex-column align-items-center pb-3'>
            <img src='coffee-logo.png' />
            <h1 className='text-white'>Our Secret Taste</h1>
          </div>

          <div className='blog-type d-flex gap-5'>
            <div className='blog-1'>
              <img src='blog1.jpg' />
              <h4 className='text-warning'>After working in coffee shops throughout the United Kingdom and the United Arab Emirates.</h4>
              <h5>Traveling from cafe to cafe, Resi is waiting as that next cup of coffee  is being prepared, ready to delve into an analysis of what is on offer. Resi has an extensive list of coffee shop reviews nicely categorized.</h5>
              <h4 className='text-warning'>Read More Our Blogs</h4>
            </div>
            <div className='blog-2'>
            <img src='blog2.jpg' />
            <h4 className='text-warning'>After working in coffee shops throughout the United Kingdom and the United Arab Emirates.</h4>
              <h5>Traveling from cafe to cafe, Resi is waiting as that next cup of coffee  is being prepared, ready to delve into an analysis of what is on offer. Resi has an extensive list of coffee shop reviews nicely categorized.</h5>
              <h4 className='text-warning'>Read More Our Blogs</h4>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Blog;