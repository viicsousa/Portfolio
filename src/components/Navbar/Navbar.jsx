import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav `
        display: flex;
        justify-content: space-between;
        padding: 1px 85px;
        background-color: #4e4e4e;
        width: 100%;
        @media (max-width: 400px) {
            display: flex;
            justify-content:center;
        
        }

`;

const Logo = styled.div `
    align-items: center;
    padding-top: 5px;

    h1 {
        font-size: 2rem;
        font-weight: bold;
        color: #08e4e4;
        @media (max-width:550px ) {
        font-size: 1.57rem;
        align-items: center;
    }
    }

    p {
        text-align: center;
        font-size: 11px;
        color: #d9eded;
    }

    
`;
const Contato = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    padding: 5px;
    cursor: pointer;
    

    @media (width: 550px) {
        width: 10px;
    }

    img:hover {
        background: #d9eded;
        border-radius: 35px;
    }

`;
const Navbar = () => {
    return (
        
            <Nav>
                <Logo>
                    <h1>VASCONCELOS</h1>
                    <p>Full-stack developer</p>
                </Logo>
                <Burger/>
                <Contato>
                    <li ><a href="https://www.linkedin.com/in/vict%C3%B3ria-vasconcelos-de-sousa-aguiar-28550392/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/45/null/linkedin-circled--v1.png" className='imgcontato'/></a></li>
                    <li ><a href="https://github.com/viicsousa" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/45/null/github--v1.png" className='imgcontato'/></a></li>     
                </Contato>
            </Nav>
        
    )
};

export default Navbar;