import '../../scss/main.scss';
import evConnection from '../../images/evConnection.png';

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
                                Lorem ipsun fdlasjfloasdjflkamdfoia ldskjfoipasdjfasl lisdajfoasidjfalskdj kljdfakdhfas
                                dlfkjas;ljfasd lksdjf;lkad fdslkhfkjlahgd kj djkgajskgf dfgajsdfb ASJGD FJHASd
                                kjhfalsdhfkajsdhfalsdf.
                            </p>
                            <button><a href="/" target="_blank" rel="noreferrer">Visit Site</a></button>
                        </div>
                        <img src={evConnection} alt="electric-car" />
                    </div>
                    <div className="card">
                        <div className="cover">
                            <p>
                                Lorem ipsun fdlasjfloasdjflkamdfoia ldskjfoipasdjfasl lisdajfoasidjfalskdj kljdfakdhfas
                                dlfkjas;ljfasd lksdjf;lkad fdslkhfkjlahgd kj djkgajskgf dfgajsdfb ASJGD FJHASd
                                kjhfalsdhfkajsdhfalsdf.
                            </p>
                            <button><a href="/" target="_blank" rel="noreferrer">Visit Site</a></button>
                        </div>
                        <img src={evConnection} alt="icomers" />
                    </div>
                    <div className="card">
                        <div className="cover">
                            <p>
                                Lorem ipsun fdlasjfloasdjflkamdfoia ldskjfoipasdjfasl lisdajfoasidjfalskdj kljdfakdhfas
                                dlfkjas;ljfasd lksdjf;lkad fdslkhfkjlahgd kj djkgajskgf dfgajsdfb ASJGD FJHASd
                                kjhfalsdhfkajsdhfalsdf.
                            </p>
                            <button><a href="/" target="_blank" rel="noreferrer">Visit Site</a></button>
                        </div>
                        <img src={evConnection} alt="music" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
