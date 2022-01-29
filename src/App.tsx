import React from 'react';
import { Header } from './components/Header/Header'
import { ProductsList } from './components/ProductsList/ProductsList';
import { GlobalStyle } from './styles/global'


export function App() {
  return (
    <>
      <Header/>
      <ProductsList/>

      <GlobalStyle/>
    </>
  );
}

