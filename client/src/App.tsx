import React, { useState } from 'react';
import './App.css';
import CoinCard from './card/card';
import IndexPage from './Index Page/indexpage';
import AppRoutes from './routes/routes';

const App = () => {

  return (<>
    <div className='App'>
      <AppRoutes />
    </div>
  </>
  )
}

export default App;
