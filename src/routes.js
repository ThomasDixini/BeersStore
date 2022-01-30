import { Routes, Route} from 'react-router-dom'
import  Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register'
import Header from './components/Header/Header'

export default function MainRoutes() {

    return (
        <Routes>
            
            <Route path="/list" element={ <Dashboard/>}/>
            <Route path="/register" element={ <Register/> }/>
        </Routes>
    );
}