import React, { Component} from "react"
import {Div, Title, Text} from './styles.js'

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