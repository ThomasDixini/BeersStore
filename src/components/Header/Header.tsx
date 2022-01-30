import {  useState } from 'react';
import { Button, Container } from './styles'
import { Link } from 'react-router-dom'







export function Header() {

    const [menuButtonSelected, setMenuButtonSelected ] = useState('');


    

    return(
        <Container>

            <img src="" alt="Logo" />
            <ul>
                <Link to="/list" style={{textDecoration: 'none'}}>
                <Button className="menuButton"
                onClick={() => { setMenuButtonSelected('list');}}
                isActive={menuButtonSelected == 'list'}
                >
                    Listagem
                </Button>
                </Link>
                
                <Link to="/register" style={{ textDecoration: 'none'}}>
                <Button
                onClick={() => { setMenuButtonSelected('register');}}
                isActive={menuButtonSelected == 'register'}
                >
                    Register
                </Button>
                </Link>
            </ul>
        </Container>
    );
}