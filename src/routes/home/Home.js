import React from "react";
import "../../common/main.scss"
import "./home.scss"
import NotFound from '../404/NotFound';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: window.pageYOffset
        }
    }

	render() {
		return(
            <div>
                <div className="hero">
                    <h1>{this.state.scroll}</h1>
                </div>
                <NotFound/>
            </div>
            
        )
	}
}

export default Home;
