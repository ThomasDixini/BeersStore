import styled from 'styled-components'


export const Container = styled.div`

max-width: 1000px;
margin: 6rem auto ;



`

export const Content = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    

    

    

            label {
                text-align: left;
                width: 70%;
                
                margin-bottom: -1rem;

                font-weight: 600;

                color: #000;
            }

            input {
                width: 70%;
                height: 4rem;
                padding: 0 2rem;
                border: 0;
                border-radius: 0.25rem;

                background-color: var(--grayBackground);

                font-size: 1rem;

                

                &::placeholder {
                    color: var(--darkBlue);
                }
                
            }

            button {

                

                border: 0;
                border-radius: 0.5rem;

                padding: 0 2rem;
                height: 4rem;
                margin: 1rem ;

                width: 10rem;

                background-color: var(--grayBackground);
                color: var(--darkBlue);

                font-weight: 600;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.7);
                }
            }
    
        

`