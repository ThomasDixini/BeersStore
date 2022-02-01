
import { BeersProvider } from './BeersContext'


import { Header }  from './components/Header/Header'
import { GlobalStyle } from './styles/global'


import { BrowserRouter as Router } from 'react-router-dom' 
import Routes from './routes'




export function App() {

  

  return (
    <BeersProvider>
    
      <Router>
        <Header />
        <Routes/>
      </Router>

      <GlobalStyle/>
    </BeersProvider>
    
  );
}

