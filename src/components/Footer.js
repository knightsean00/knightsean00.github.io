import React from "react";
import "../common/main.scss";
import "./footer.scss";

class Header extends React.Component {
	render() {
        return (
            <footer className="pt-5 pb-5">
                <div className="container pl-2 pr-2 text-align-center">
                    <a href="https://github.com/knightsean00/knightsean00.github.io"><h5>Source</h5></a>
                    <a onClick={() => window.scrollTo(0,0)}><h6>To the top</h6></a>
                </div>
            </footer>
        )
	}
}

export default Header;
