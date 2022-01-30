import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container} from "./styles";
import closeImg from '../../assets/Vector.svg'

import { Product } from '../Dashboard/Dashboard'

interface ProductsListProps {
    beers: Product[],
    removeBeer: (id: number) => void;
}


export function ProductsList({beers, removeBeer}: ProductsListProps) {

    



 /*   
    useEffect(() => {
        api.get('list/products')
        .then(response => setProducts(response.data.products))
        
    }, [])
*/

    

    

    



    

    return(
        <Container>

            {beers.map(beer => {
                return(
                    
                    
                    <div key={beer.id}>
                        

                        <img className="close" src={closeImg} alt="Cerveja" onClick={() => removeBeer(beer.id)}/>
                        <img src={beer.image_url} alt="Produto" />
                        <h3>{beer.name}</h3>
                        <span>{beer.description}</span>
                    </div>
                    
                );
            })}

        </Container>
    );
}