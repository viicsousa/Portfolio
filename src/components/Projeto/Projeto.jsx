import styled from "styled-components";

const Projetos = styled.div `
        background-color: #d9eded;
        text-align: center;
        padding: 0;
        margin: 0;
        transition: all;
        height: 500px;

    h3 {
        font-size: 35px;
        padding: 45px;
    };

    ul {
        display: flex;
        list-style: none;
        padding-bottom: 85px;
        @media (max-width: 1190px) {
            display: inline;
            flex-flow: column nowrap;
        }
    };

    li {
        border: 2px black solid;
        margin: 26px;
        border-radius: 35px;
        width: 280px;
        height: 220px;
        cursor: pointer;
        color: black;
        font-weight: bolder;
        font-style: oblique;
        font-size: 18px;
        
    }

    img {
        text-decoration: none;
        border-radius: 35px;
        width: 100%;
        height: 100%;
    };
`;


const Projeto = () => {
    return (
        <Projetos>
            <h3>Meus projetos</h3>
            <ul>
                <li><a href="https://github.com/viicsousa/ProjetoIMA/tree/main/Clone%20do%20tinder" target="_blank" rel="noopener noreferrer"><img src="/img/proj-tinder.jpg" alt="Pagina de Tinder"/></a>Página do tinder</li>
                <li><a href="https://github.com/viicsousa/ProjetoIMA/tree/main/Clone%20do%20spotify" target="_blank" rel="noopener noreferrer"><img src="/img/proj-spotify.jpg" alt="Clone Spotify" /></a>Clone spotify</li>
                <li><a href="https://github.com/viicsousa/Projeto-Salao-MaVic" target="_blank" rel="noopener noreferrer"><img src="/img/proj-salao.jpg" alt="Site de Salão"/></a>Site de salão</li> 
                <li><a href="https://effulgent-speculoos-4fd138.netlify.app/" target="_blank" rel="noopener noreferrer"><img src="/img/proj-hackadev.jpg" alt="Loja de roupas" /></a>Loja de roupas</li>
            </ul>
            <hr />
        </Projetos>
    )
}

export default Projeto;