import styled from 'styled-components'



export const Container = styled.div`

    width: 100%;
    margin: 3rem auto;


    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    flex-wrap: wrap;

    

    div { 
    background-color: var(--darkBlue);
    color: var(--shape);

    margin: auto;
    padding: 2rem;
    border-radius: 0.5rem;

    width: 20rem;
    height: 26rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover { 
        border: 2px solid var(--verdeAgua);
        cursor: pointer;
    }

        .close {
            width: 20px;
            border: 0;

            background-color: transparent;
            color: yellow;
            position: relative;
            top: -1rem;
            left: 8rem;

            &:hover {
                filter: brightness(0.6)
            }
            
            
        }

        img {
            max-height: 12rem;
            width: 12rem;
            background-color: var(--grayBackground);

            border-radius: 0.5rem;

            object-fit: contain;

        }

        h3 {
            margin-top: 2rem;
            
        }

        span {
            margin-bottom: 2rem;
            overflow-y: scroll;

            &::-webkit-scrollbar{
                background-color: transparent;
            }
            
        }

    }


`;





