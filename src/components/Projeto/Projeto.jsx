import './Projeto.css'


const Projeto = () => {
    return (
        <div className='container-projetos'>
            <h3>Meus projetos</h3>
            <ul>
                <li className='projetos'><img src="/img/proj-tinder.jpg" alt="Pagina de Tinder" className='imgprojeto' text="pagina"/>Página do tinder</li>
                <li className='projetos'><img src="/img/proj-spotify.jpg" alt="Clone Spotify" className='imgprojeto'/>Clone spotify</li>
                <li className='projetos'><img src="/img/proj-salao.jpg" alt="Site de Salão" className='imgprojeto'/>Site de salão</li> 
                <li className='projetos'><img src="/img/proj-hackadev.jpg" alt="Loja de roupas" className='imgprojeto'/>Loja de roupas</li>
            </ul>
            <hr />
        </div>
    )
}

export default Projeto;