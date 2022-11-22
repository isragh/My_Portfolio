import '../../scss/main.scss';
import about from '../../images/description.png';

import Footer from '../navigation/Footer';

export default function About() {
    return (
        <>

            <div className="cont-description">
                <div className="description">
                    <h2>Who am I and what I do?</h2>
                    <p>
                        My name is Israel and I am a Spanish citizen living in Berlin.
                        <br></br>
                        <br></br>
                        When I first started to understand coding from a simple page
                        creation, I discovered my true passion. I wanted to get a deeper
                        involvement in building out applications and my ambition to
                        develop as a professional web developer has supported my
                        growth. I am determined to continually learn and improve my
                        skills in creating high-quality websites.
                        <br></br>
                        <br></br>
                        I am proactive, a quick learner, naturally curious and I take
                        full responsibility over my work.
                        <br></br>
                        <br></br>
                        If you are willing to connect and network, you can find me
                        on <a href="https://www.linkedin.com/in/isra-gonzalez-86054818b/" target="_blank" rel="noreferrer">Linkedin</a>.
                        Additionally, you can find my work
                        on <a href="https://github.com/isragh" target="_blank" rel="noreferrer">Github</a>.
                    </p>
                </div>
                <div className="img-description">
                    <img src={about} alt="drawing office" />
                </div>
            </div>
            <Footer />
        </>

    )
}
