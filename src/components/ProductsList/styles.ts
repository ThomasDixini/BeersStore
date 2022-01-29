import styled from 'styled-components'



export const Container = styled.div`

    max-width: 1000px;
    margin: 4rem auto;


    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    flex-wrap: wrap;

    div { 
    background-color: #ffee55;

    margin: auto;
    padding: 2rem;
    border-radius: 0.5rem;

    width: 20rem;
    height: 22rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        flex-grow: 1;
        width: 70%;
        background-color:blue;
    }

    h3 {
        margin-top: 2rem;
    }

    p {
        margin-bottom: 2rem;
    }

    }


`;





