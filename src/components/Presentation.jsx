import styled from "styled-components";

const Apresentação = styled.div `
        background-color: #d9eded;
        text-align: center;

     h3 {
        font-size: 35px;
        padding: 41px;
        font-weight: bolder;
     };

     p {
        padding: 2px 22% 40px 22%;
        line-height: 35px;
        margin-bottom: 40px;
        
        @media (max-width: 1157px) {
        padding: 1px 12% 41px 12%;
        line-height: 25px;
     };

     };

     hr {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
     };



    
`;

const Presentarion = () => {
    return (
        <Apresentação>
            <h3>Sobre mim </h3>
            <p>Programadora e desenvolvedora há 7 meses. Teve ínicio na carreira em abril de 2022. Começou aprendendo Python, mas conseguiu uma vaga no curso da Imã Leaning para ser desenvolvedora Full Stack. Formou da Imão em novembro de 2022. Ainda não possou experiência em empresas, mas tenho projetos, tento me manter ativa criando projetos. Possuo conhecimentos básicos em: HTML5, CSS3, JavaScript, React, Figma, Nodejs, Git e PostgreSQL. </p>
            <hr />
        </Apresentação>
        

    )
}

export default Presentarion;