import React from "react";
import { Link } from "react-router-dom";
import "../../common/main.scss";
import "./404.scss";

class NotFound extends React.Component {
	render() {
		return(
            <div className="full">
                <h1>404 - Page Not Found</h1>
                <a href="/">Take me back to safety</a>
            </div>
        )
	}
}

export default NotFound;
