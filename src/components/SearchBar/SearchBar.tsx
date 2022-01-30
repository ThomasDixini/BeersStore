import { Container } from "./styles";




interface SearchBarProps {
    inputFunction: (text: string) => void;
}


export function SearchBar( {inputFunction } : SearchBarProps) {

    


    return (
        <Container>
            <input 
            type="text"  
            placeholder="Search" 
            onChange={event => inputFunction(event.target.value)}
            />
        </Container>
    );
}