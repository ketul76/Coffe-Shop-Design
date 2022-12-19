import React from 'react';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Header from './Header';
import Ourcoffe from './Ourcoffe';
import Poster from './Poster';
import Subscribe from './Subscribe';
import Works from './Works';

function Layout() {
  return (
    <>
      <Header />
      <About />
      <Ourcoffe />
      <Poster />
      <Works/>
      <Blog />
      <Subscribe />
      <Contact />
    </>
  );
}

export default Layout;