import styled from 'styled-components'


export const Container = styled.main`

max-width: 1000px;
margin: 6rem auto ;



`

export const Content = styled.div`

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
    
        

`