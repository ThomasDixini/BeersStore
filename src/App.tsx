import React from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header'
import { GlobalStyle } from './styles/global'


export function App() {
  return (
    <>
      <Header/>

      <Dashboard/>

      <GlobalStyle/>
    </>
  );
}

