import { ProductsList } from '../ProductsList/ProductsList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Container } from './styles';


export function Dashboard() {
    return (
        <Container>
            <SearchBar/>
            <ProductsList/>
        </Container>
    );

}