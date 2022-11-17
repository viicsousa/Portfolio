import React from "react";
import styled from "styled-components";

const Ul = styled.ul `
    display: flex; 
    align-items: center;
    padding: 0px;

    li {

        margin: 10px;
        padding: 10px;
        list-style: none;
        color: #d9eded;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;

    }

    @media (min-width: 1191px) {
        padding-left: 450px;
    }
    
    @media (max-width: 1000px) {
        flex-flow: column nowrap;
        background-color: #5c5c5c;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translate(100%)'};
        top: 0;
        right: 0;
        height: 32vh;
        width: 230px;
        transition: transform 0.3s ease-in-out;
    }

`


const List = ({open}) => {
    return (
        <Ul open={open}>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
        </Ul>
    )
}

export default List;