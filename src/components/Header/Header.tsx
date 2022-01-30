import {  useState } from 'react';
import { Button, Container } from './styles'
import { Link } from 'react-router-dom'







export function Header() {

    const [menuButtonSelected, setMenuButtonSelected ] = useState('');


    

    return(
        <Container>

            <img src="" alt="Logo" />
            <ul>
                <Button className="menuButton"
                onClick={() => { setMenuButtonSelected('list');}}
                isActive={menuButtonSelected == 'list'}
                >
                    <Link to="/list"> Listagem </Link>
                </Button>

                <Button
                onClick={() => { setMenuButtonSelected('register');}}
                isActive={menuButtonSelected == 'register'}
                >
                    <Link to="/register"> Register </Link>
                </Button>
            </ul>
        </Container>
    );
}