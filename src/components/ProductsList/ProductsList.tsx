import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container} from "./styles";


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

    


    

    
    

    

    return(
        <Container>

            {products.map(product => {
                return(
                    <div key={product.id}>
                        <img src={product.image_url} alt="Produto" />
                        <h3>{product.title}</h3>
                        <span>{product.description}</span>
                    </div>
                );
            })}

        </Container>
    );
}