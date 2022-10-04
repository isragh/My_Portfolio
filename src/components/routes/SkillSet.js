import '../../scss/main.scss';
import htmlLogo from '../../images/html_logo.png';
import cssLogo from '../../images/css_logo.png';
import jsLogo from '../../images/js_logo.png';
import bootstrapLogo from '../../images/bootstrap_logo.png';
import mongoLogo from '../../images/mongodb.png'
import expressLogo from '../../images/express.png'
import nodeLogo from '../../images/node_logo.png';
import reactLogo from '../../images/react_logo.png';
import githubLogo from '../../images/github_logo.png';

import Footer from '../navigation/Footer';

export default function SkillSet() {
    return (
        <>
            <div className="skills">
                <h2>Skillset</h2>
                <div className="cont-skills">
                    <h3 className="icon html-txt">HTML</h3>
                    <div className="icon html"><img src={htmlLogo} alt="html_logo" /></div>
                    <h3 className="icon css-txt">CSS</h3>
                    <div className="icon css"><img src={cssLogo} alt="css_logo" /></div>
                    <h3 className="icon js-txt">JS</h3>
                    <div className="icon js"><img src={jsLogo} alt="js_logo" /></div>
                    <h3 className="icon bootstrap-txt">BOOTSTRAP</h3>
                    <div className="icon bootstrap"><img src={bootstrapLogo} alt="bootstrap_logo" /></div>
                </div>

                <div className="cont-bt">
                    <h3 className="icon mongo-txt">MONGO</h3>
                    <div className="icon mongo"><img src={mongoLogo} alt="node_logo" /></div>
                    <h3 className="icon express-txt">EXPRESS</h3>
                    <div className="icon express"><img src={expressLogo} alt="node_logo" /></div>
                    <h3 className="icon react-txt">REACT</h3>
                    <div className="icon react"><img src={reactLogo} alt="node_logo" /></div>
                    <h3 className="icon node-txt">NODE</h3>
                    <div className="icon node"><img src={nodeLogo} alt="node_logo" /></div>
                    <h3 className="icon git-txt">GITHUB</h3>
                    <div className="icon git"><img src={githubLogo} alt="github_logo" /></div>
                </div>
            </div>
            <Footer />
        </>
    )
}