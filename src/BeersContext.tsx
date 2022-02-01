import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';




export interface Product {
    id: number,
    name: string,
    description: string,
    image_url: string
}

type BeerInput = Omit<Product, 'id' | 'image_url'>

interface BeersContextData {
    beers: Product[],
    createBeer: (beer: BeerInput) => void,
    handleRemoveBeer: (id: number) => void,
}

interface BeersProviderProps{
    children: ReactNode,
}

export const BeersContext = createContext<BeersContextData>({} as BeersContextData)


export function BeersProvider({ children }: BeersProviderProps) {

    const [beers, setBeers] = useState<Product[]>([]);
    




    async function createBeer(beerInput: BeerInput) {                       // CRIA UMA CERVEJA
    
      const response = await api.post('/list/products', beerInput)

      const {beer} = response.data

      setBeers(beer)
    }

    useEffect(() => {
        api.get('list/products')                                                // LISTA AS CERVEJAS
        .then(response => setBeers(response.data.products))
        
    }, [])



    function handleRemoveBeer(id: number) {
        const beersFiltred = beers.filter(beer => beer.id !== id);
        setBeers(beersFiltred)
        
    }

    return (
        <BeersContext.Provider value={{ beers, createBeer, handleRemoveBeer}}>
            {children}
        </BeersContext.Provider>
    );
}