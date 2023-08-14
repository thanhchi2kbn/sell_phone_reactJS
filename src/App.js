import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './Page/ProductPage/Index';

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <ProductPage/>
      </BrowserRouter>

    </div>
  );
}

export default App;


   {/* <Header/>
          <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/user' element={<UserContainer></UserContainer>}/>
            <Route path='/post' element={<Post></Post>}/>
          </Routes> */}