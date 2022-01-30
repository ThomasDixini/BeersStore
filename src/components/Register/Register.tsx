import { useState } from 'react';
import { Container, Content } from './styles'



export default function Register() {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    

    return (
        <Container>
            <Content>

                
                
                    <label htmlFor='titulo'> Título </label>
                    <input 
                    type="text" 
                    id="titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    />
                
                

                
                    <label htmlFor='descriçao'> Descrição </label>
                    <input 
                    type="text" 
                    id="descriçao"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                    />

                    <button type="submit"> Salvar </button>
                
                
            </Content>
        </Container>
    );
}