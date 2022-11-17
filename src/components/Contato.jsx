import React, { Component } from "react"
import styled from "styled-components";
 const Div = styled.div`
    background-color: #d9eded;
    text-align: center;
    padding: 0;
    margin: 0;
    transition: all;
    height: 400px;
`;

 const Title = styled.h3 `
    font-size: 35px;
    padding: 45px;

    @media (max-width: 629px) {
        font-size:24px;
        padding: 45px;
    }

`;
    const Text = styled.p `
    line-height: 42px;
    font-size: 18px;
    
    @media (max-width: 630px) {
        font-size: 16px;
        line-height: 32px;
    }
`;
class Contato extends Component {
    render () {
    return (
        <Div>
            <Title>Contato</Title>
            <Text>Se você quiser conversar, entre em contato, estou quase sempre online :) </Text>
            <Text>Envie uma mensagem</Text>
            <Text>WhatsApp: (62) 98579-7421</Text>
            <Text>Email: victoria.vasconcelos@hotmail.com</Text>
        </Div>
    )
}
};

export default Contato;