import { FormEvent, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container, Content } from './styles'



export default function Register() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   

    

    function handleCreateNewProduct(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            description,
        }

        api.post('/list/products', data)
    }


    
    

    return (
        <Container>
            <Content onSubmit={handleCreateNewProduct}>

                
                
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
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    />

                    <button type="submit"> Salvar </button>
                
                
            </Content>
        </Container>
    );
}