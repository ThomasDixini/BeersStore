import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container} from "./styles";

import closeImg from '../../assets/Vector.svg'


interface Product {
    id: number,
    title: string,
    description: string,
    image_url: string
}

export function ProductsList() {

    const [products, setProducts] = useState<Product[]>([])



 /*   
    useEffect(() => {
        api.get('list/products')
        .then(response => setProducts(response.data.products))
        
    }, [])
*/

    useEffect(()=> {
        api.get('https://api.punkapi.com/v2/beers')
        .then(response => setProducts(response.data))
    },[])

    console.log(products)

    function handleRemoveBeer(id: number) {
        const beersFiltred = products.filter(product => product.id !== id);
        setProducts(beersFiltred)
    }

    


    

    
    

    

    return(
        <Container>

            {products.map(product => {
                return(
                    
                    
                    <div key={product.id}>

                        <img className="close" src={closeImg} alt="Cerveja" onClick={() => handleRemoveBeer(product.id)}/>
                        <img src={product.image_url} alt="Produto" />
                        <h3>{product.title}</h3>
                        <span>{product.description}</span>
                    </div>
                    
                );
            })}

        </Container>
    );
}