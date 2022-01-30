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
    
        display: flex;
        align-items: center;

    }


`

interface ButtonProps {

    isActive: boolean;
}


export const Button = styled.li<ButtonProps>`


            transition: background 0.2s;


            color: var(--shape);
            background: ${props => props.isActive ? 'var(--verdeAgua)' : 'transparent'};

            list-style-type: none;
            margin-right: 2rem;

            padding: 0 1.5rem;
            height: 2.5rem;
            border-radius: 0.5rem;

            display: flex;
            align-items: center;

            &:hover {
                cursor: pointer;
            }
     

`