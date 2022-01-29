import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Header } from './components/Header/Header'
import { GlobalStyle } from './styles/global'


export function App() {

  const [page, setPage] = useState('')

  function handleSelectTypePage(type: string) {
          setPage(type)
  }

  return (
    <>
      <Header  typePage={handleSelectTypePage} pag={page}/>
      <Dashboard/>

      <GlobalStyle/>
    </>
  );
}

