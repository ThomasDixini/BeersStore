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



    return(
        <Container>
            
                        <div>
                            <img src="" alt="Produto" />
                            <h3>Title</h3>
                            <p>Description</p>
                        </div>
                    
            
        </Container>
    );
}