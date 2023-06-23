import React from "react";
import "../common/main.scss";
import "./footer.scss";
import SvgGit from "../common/svgs/SvgGit";
import SvgLinkedin from "../common/svgs/SvgLinkedin";
import SvgMail from "../common/svgs/SvgMail";
import SvgMusescore from "../common/svgs/SvgMusescore";

class Header extends React.Component {
	render() {
        return (
            <footer className="pt-5 pb-5">
                <div className="container text-align-center">
                    <div className="footer-row">
                        <a href="https://github.com/knightsean00/knightsean00.github.io" target="_blank" rel="noopener noreferrer"><h4>Source</h4></a>
                    </div>
                    <div className="socials-row">
                        <div className="socials">
                            <div><a href="https://github.com/knightsean00/" target="_blank" rel="noopener noreferrer"><SvgGit/></a></div>
                            <div><a href="https://www.linkedin.com/in/knightsean00/" target="_blank" rel="noopener noreferrer"><SvgLinkedin/></a></div>
                            <div><a href="https://musescore.com/user/35722062" target="_blank" rel="noopener noreferrer"><SvgMusescore/></a></div>
                            <div><a href="mailto:knightsean00@gmail.com"><SvgMail/></a></div>
                        </div>
                    </div>
                    <div className="footer-row">
                        <a onClick={() => window.scrollTo(0,0)}><h5>To the top</h5></a>
                    </div>
                </div>
            </footer>
        )
	}
}

export default Header;
