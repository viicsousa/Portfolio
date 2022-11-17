import styled from 'styled-components'
import img from './img/imgbback.jpg'


const About = styled.div `
    background-image:  url(${img});
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    text-align: center;
    margin: auto;
    padding: auto;
    h4 {
        font-weight: bold;
        font-size: 33px;
        color: #d9eded;

        @media (max-width: 550px) {
            font-size: 24px;
        }
    };

    h2 {
        font-size: 69px;
        font-weight: bold;
        color: #04f7f7;

        @media (max-width: 715px) {
            font-size: 52px
        }

        @media (max-width: 550px ) {
            font-size: 44px;
        }
    };

    span {
        font-size: 21px;
        color: #d9eded;

        @media (max-width: 550px) {
            font-size: 16px;
        }
    };
    
    button {
        display: block;
        margin: auto;
        padding: auto;
        cursor: pointer;
        list-style: none;
        border-color: #04f7f7;
        height: 3rem !important;
        padding: 0 3rem 0 3rem !important;
        margin-top: 1rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        background: transparent !important;
        border: 3px solid rgb(14, 14, 14);
        border-radius: 35px;
        overflow: hidden;
        font-weight: bold;  

        @media (max-width: 550px){
            font-size: 0.87rem;
            padding: 0 1rem 0 1rem !important;
            border: 2px solid rgb(14, 14, 14);
        }
    }

`;

const Aboutme = () => {
    return (
        <About>
                <div>
                <h4>PORTFÓLIO</h4>
                <h2>Victória Vasconcelos</h2>
                <span>FULL-STACK DEVELOPER</span>
                <button>Saiba Mais</button>
                </div>
                
        </About>
        
    )
}



export default Aboutme;