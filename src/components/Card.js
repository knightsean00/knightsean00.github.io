import React from "react";
import "../common/main.scss";
import "./cards.scss";

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

	render() {
        let color = (this.props.color === "black") ? "bg-white" : "bg-black";
        if (this.props.type === "music") {
            return (
                <div className={"card " + color}>
                    <div className="">
                        <a href={this.props.data.url}><img src={this.props.data.photo} /></a>
                    </div>
                    <div className="card-description pl-1 pr-1 pb-3">
                        <a className="text-align-center" href={this.props.data.url}><h4>{this.props.data.name}</h4></a>
                        <p>{this.props.data.description}</p>
                        <div className="music-icons">
                            {
                                (this.props.data.links.musescore != null) ?
                                <a href={this.props.data.links.musescore}>Musescore</a> :
                                <div></div>
                            }
                            {
                                (this.props.data.links.download != null) ?
                                <a href={this.props.data.links.download}>Download</a> :
                                <div></div>
                            }
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.type === "project") {
            if (this.props.data.photo != null) {
                return (
                    <div className={"card " + color}>
                        <div className="">
                            <a href={this.props.data.url}><img src={this.props.data.photo} /></a>
                        </div>
                        <div className="card-description pl-1 pr-1">
                            <a className="text-align-center" href={this.props.data.url}><h4>{this.props.data.name}</h4></a>
                            <p>{this.props.data.description}</p>
                            <p className="text-align-center">Built with {this.props.data.tech}</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className={"card " + color}>
                        <div className="card-description pl-1 pr-1">
                            <a className="text-align-center" href={this.props.data.url}><h4>{this.props.data.name}</h4></a>
                            <p>{this.props.data.description}</p>
                            <p className="text-align-center">Built with {this.props.data.tech}</p>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div></div>
        )
	}
}

export default Card;
