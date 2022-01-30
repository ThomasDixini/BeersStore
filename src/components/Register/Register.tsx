import { Container, Content } from './styles'



export default function Register() {
    return (
        <Container>
            <Content>
                
                    <label htmlFor='titulo'> Título </label>
                    <input type="text" id="titulo"/>
                
                

                
                <label htmlFor='descriçao'> Descrição </label>
                <input type="text" id="descriçao"/>
                
                
            </Content>
        </Container>
    );
}