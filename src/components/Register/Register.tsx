import { FormEvent, useContext, useState } from 'react';
import { BeersContext } from '../../BeersContext';
import { Container, Content } from './styles'



export default function Register() {


    const {createBeer} = useContext(BeersContext)

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
   

    

    async function handleCreateNewProduct(event: FormEvent) {
        event.preventDefault()

        await createBeer({
            name,
            description
        })

        setName('')
        setDescription('')
    }


    
    

    return (
        <Container>
            <Content onSubmit={handleCreateNewProduct}>

                
                
                    <label htmlFor='titulo'> Título </label>
                    <input 
                    type="text" 
                    id="titulo"
                    value={name}
                    onChange={event => setName(event.target.value)}
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