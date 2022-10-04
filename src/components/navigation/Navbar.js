import '../../scss/main.scss';
import logo from '../../images/logo.png'

import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="nav-logo">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <h2>Israel <span>Full-Stack Developer</span></h2>
            </div>
            <div className="nav-menu">
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='about'>About</Link>
                <Link className='link' to='skillset'>Skillset</Link>
                <Link className='link' to='projects'>Projects</Link>
                <Link className='link' to='contact'>Contact</Link>
            </div>
        </div>
    )
};