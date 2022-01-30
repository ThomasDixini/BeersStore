import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { Header }  from './components/Header/Header'
import { GlobalStyle } from './styles/global'

import { BrowserRouter as Router } from 'react-router-dom' 

import Routes from './routes'




export function App() {

  

  return (
    <>
    
      <Router>
        <Header />
        <Routes/>
      </Router>

      <GlobalStyle/>
    </>
    
  );
}

