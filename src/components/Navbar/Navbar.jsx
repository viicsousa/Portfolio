
import './Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='navigation'>
            <div className='nav-container'>
                <div className='logo'>
                    <h1>VASCONCELOS</h1>
                    <p>Full-stack developer</p>
                </div>
                <ul className='nav-list'>
                    <li className='nav-item'> Sobre</li>
                    <li className='nav-item'>Projetos </li>
                    <li className='nav-item'>Contato</li>
                    <li className='nav-contato'><a href="https://www.linkedin.com/in/vict%C3%B3ria-vasconcelos-de-sousa-aguiar-28550392/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/50/null/linkedin-circled--v1.png" className='imgcontato'/></a></li>
                    <li className='nav-contato'><a href="https://github.com/viicsousa" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/50/null/github--v1.png" className='imgcontato'/></a></li>     
                </ul>
            </div>
        </div>
    )
};

export default Navbar;