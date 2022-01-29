import { useState } from 'react';
import { Button, Container } from './styles'


interface Headerprops {
    typePage: (type: string) => void;
    pag: string;
}


export function Header({ typePage , pag}: Headerprops) {

    const [menuButtonSelected, setMenuButtonSelected ] = useState('');


    

    return(
        <Container>

            <img src="" alt="Logo" />
            <ul>
                <Button className="menuButton"
                onClick={() => { setMenuButtonSelected('list'); typePage('list');}}
                isActive={menuButtonSelected == 'list'}
                >
                    Listagem
                </Button>

                <Button
                onClick={() => { setMenuButtonSelected('register'); typePage('register'); }}
                isActive={menuButtonSelected == 'register'}
                >
                    Cadastro
                </Button>
            </ul>
        </Container>
    );
}