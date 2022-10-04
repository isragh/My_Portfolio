import '../../scss/main.scss';
import { FaLinkedinIn, FaEnvelopeOpenText, FaGithub } from 'react-icons/fa'

import { Link } from 'react-router-dom';

export default function Footer() {
    return (

        <div className="content-footer">
            <div>
                <a href="https://www.linkedin.com/in/isra-gonzalez-86054818b/" target="_blank" rel="noreferrer" className='icon-contact'>
                    <FaLinkedinIn  />
                </a>
                <Link to="/contact" className='icon-contact'>
                    <FaEnvelopeOpenText />
                </Link>
                <a href="https://github.com/isragh" target="_blank" rel="noreferrer" className='icon-contact' >
                    <FaGithub />
                </a>
            </div>

            <div>
                <p>
                    I am looking forward to collaborating together on great projects for the future!
                    <br></br>
                    <br></br>
                    Let's connect!
                </p>
            </div>
        </div>
    )
}