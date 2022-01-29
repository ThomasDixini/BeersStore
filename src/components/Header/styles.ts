import styled from 'styled-components'



export const Container = styled.header`

    background: #000;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        position: absolute;
        left: 10rem;
    }
    
    ul {
    

        li { 

            color: var(--shape);

            list-style-type: none;
            display: inline-block;
            margin-right: 2rem;

        
        }
    }


`