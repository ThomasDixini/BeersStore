import { useContext} from "react";



import { Container} from "./styles";
import closeImg from '../../assets/Vector.svg'
import { BeersContext } from "../../BeersContext";



export function ProductsList() {

    const {beers, handleRemoveBeer} = useContext(BeersContext)

    
    return(
        <Container>

            {beers.map(beer => {
                return(
                    
                    
                    <div key={beer.id}>
                        

                        <img className="close" src={closeImg} alt="Cerveja" onClick={() => handleRemoveBeer(beer.id)}/>
                        <img src={beer.image_url} alt="Produto" />
                        <h3>{beer.name}</h3>
                        <span>{beer.description}</span>
                    </div>
                    
                );
            })}

        </Container>
    );
}