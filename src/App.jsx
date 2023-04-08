import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
     <div>
      {/* <h1>Starting point</h1> */}
      {/* header */}
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
      {/* footer */}
     </div>
  );
};

export default App;