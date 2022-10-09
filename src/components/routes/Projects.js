import '../../scss/main.scss';
import evConnection from '../../images/evConnection.png';
import clickAndEat from '../../images/clickandeat.png';
import feedbackApp from '../../images/feedbackapp.png';

import Footer from '../navigation/Footer';

export default function Projects() {
    return (
        <>
            <div className="projects">
                <h2>Projects</h2>
                <div className="container-cards">
                    <div className="card">
                        <div className="cover">
                            <p>
                                App that facilitates EV
                                drivers to charge their car by connecting
                                with private wall box owners.
                            </p>
                            <button><a href="https://evconnection.herokuapp.com/" target="_blank" rel="noreferrer">Visit Site</a></button>
                        </div>
                        <img src={evConnection} alt="electric-car" />
                    </div>
                    <div className="card">
                        <div className="cover">
                            <p>
                                App that enables placing food orders.
                            </p>
                            <button><a href="https://clickandeat.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a></button>
                        </div>
                        <img src={clickAndEat} alt="icomers" />
                    </div>
                    <div className="card">
                        <div className="cover">
                            <p>
                                App that allows users to add, update and
                                delete feedback.
                            </p>
                            <button><a href="https://feedbackapp-isra.netlify.app/" target="_blank" rel="noreferrer">Visit Site</a></button>
                        </div>
                        <img src={feedbackApp} alt="music" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
