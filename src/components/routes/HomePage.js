import '../../scss/main.scss';
import logo from '../../images/logo.png';
import bubble from '../../images/bubble.png';

export default function HomePage() {
    return (
        <div className='home-container'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='title'>
                <h1>
                    Hello, my name is Israel.
                    <br></br>
                    <span>I am a Full-Stack Developer</span>
                    <br></br>
                    living in Berlin.
                </h1>
            </div>

            <div class="bubbles">
                <div class="bubble-content b1">
                    <img src={bubble} alt='bubble' />
                    <h2>js</h2>
                </div>
                <div class="bubble-content b2">
                    <img src={bubble} alt='bubble' />
                    <h2>html</h2>
                </div>
                <div class="bubble-content b3">
                    <img src={bubble} alt='bubble' />
                    <h2>react</h2>
                </div>
                <div class="bubble-content b4">
                    <img src={bubble} alt='bubble' />
                    <h2>node</h2>
                </div>
                <div class="bubble-content b5">
                    <img src={bubble} alt='bubble' />
                    <h2>git</h2>
                </div>
                <div class="bubble-content b6">
                    <img src={bubble} alt='bubble' />
                    <h2>jsx</h2>
                </div>
                <div class="bubble-content b7">
                    <img src={bubble} alt='bubble' />
                    <h2>sass</h2>
                </div>
            </div>
        </div>
    )
};