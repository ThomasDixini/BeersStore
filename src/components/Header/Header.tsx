import { useState } from 'react';
import { Button, Container } from './styles'


export function Header() {

    const [menuButtonSelected, setMenuButtonSelected ] = useState('');


    

    return(
        <Container>

            <img src="" alt="Logo" />
            <ul>
                <Button
                onClick={() => { setMenuButtonSelected('list') }}
                isActive={menuButtonSelected == 'list'}
                >
                    Listagem
                </Button>

                <Button
                onClick={() => { setMenuButtonSelected('register') }}
                isActive={menuButtonSelected == 'register'}
                >
                    Cadastro
                </Button>
            </ul>
        </Container>
    );
}