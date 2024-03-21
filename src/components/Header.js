import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className='aligner'>
                <Link to='/solicitacao'>
                    <button className='button'>Solicitações Clínicas</button>
                </Link>
                <Link to='/'>
                    <button className='button'>Listagem de Pacientes</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;