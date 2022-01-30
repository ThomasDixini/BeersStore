import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { ProductsList } from '../ProductsList/ProductsList';
import { SearchBar } from '../SearchBar/SearchBar';
import { Container } from './styles';



export interface Product {
    id: number,
    name: string,
    description: string,
    image_url: string
}

export default function Dashboard() {

    const [products, setProducts] = useState<Product[]>([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(()=> {
        api.get('https://api.punkapi.com/v2/beers')
        .then(response => setProducts(response.data))
    },[])

    function handleRemoveBeer(id: number) {
        const beersFiltred = products.filter(product => product.id !== id);
        setProducts(beersFiltred)
        
    }



    function setInputValue(inputText: string) {
        setSearchValue(inputText);
    }

    


    

    useEffect(() => {

        const productFiltred = products.filter(product => product.name === searchValue)

        productFiltred.map(prod => setProducts([prod]))
        
    }, [searchValue])

    return (
        <Container>
            <SearchBar  inputFunction={setInputValue}/>
            <ProductsList beers={products} removeBeer={handleRemoveBeer}/>
        </Container>
    );

}