import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container} from "./styles";


interface Product {
    id: number,
    title: string,
    description: string,
}

export function ProductsList() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        api.get('list/products')
        .then(response => setProducts(response.data.products))
        
        
    }, [])

    return(
        <Container>

            {products.map(product => {
                return(
                    <div key={product.id}>
                        <img src="" alt="Produto" />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </div>
                );
            })}

        </Container>
    );
}