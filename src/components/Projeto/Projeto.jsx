import './Projeto.css'


const Projeto = () => {
    return (
        <div className='container-projetos'>
            <h3>Meus projetos</h3>
            <ul>
                <li className='projetos'><a href="https://github.com/viicsousa/ProjetoIMA/tree/main/Clone%20do%20tinder" target="_blank" rel="noopener noreferrer"><img src="/img/proj-tinder.jpg" alt="Pagina de Tinder" className='imgprojeto' text="pagina"/></a>Página do tinder</li>
                <li className='projetos'><a href="https://github.com/viicsousa/ProjetoIMA/tree/main/Clone%20do%20spotify" target="_blank" rel="noopener noreferrer"><img src="/img/proj-spotify.jpg" alt="Clone Spotify" className='imgprojeto'/></a>Clone spotify</li>
                <li className='projetos'> <a href="https://github.com/viicsousa/Projeto-Salao-MaVic" target="_blank" rel="noopener noreferrer"><img src="/img/proj-salao.jpg" alt="Site de Salão" className='imgprojeto'/></a>Site de salão</li> 
                <li className='projetos'><a href="https://effulgent-speculoos-4fd138.netlify.app/" target="_blank" rel="noopener noreferrer"><img src="/img/proj-hackadev.jpg" alt="Loja de roupas" className='imgprojeto'/></a>Loja de roupas</li>
            </ul>
            <hr />
        </div>
    )
}

export default Projeto;