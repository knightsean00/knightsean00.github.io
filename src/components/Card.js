import React from "react";
import PropTypes from 'prop-types';
import "../common/main.scss";
import "./cards.scss";
import SvgMusescore from '../common/svgs/SvgMusescore';
import SvgDownload from '../common/svgs/SvgDownload';

const colorMap = {
    "black": "bg-white",
    "white": "bg-black"
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.color != null) {
            this.state = {
                cardClass: `card ${colorMap[this.props.color]}`
            };
        } else {
            this.state = {
                cardClass: `card bg-white`
            };
        }

        this.isVisible = this.isVisible.bind(this);

        this.view = React.createRef();
    }

    isVisible() {
        const top = this.view.current.getBoundingClientRect().top;
        const bottom = this.view.current.getBoundingClientRect().bottom;
        if (top <= window.innerHeight && bottom >= 0) {
            this.setState({cardClass: `card ${colorMap[this.props.color]} visible`});
        } else {
            this.setState({cardClass: `card ${colorMap[this.props.color]}`});
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.isVisible);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.isVisible);
    }

	render() {
        if (this.props.type === "music") {
            return (
                <div className={this.state.cardClass} ref={this.view}>
                    <div className="">
                        <a href={this.props.data.url} target="_blank" rel="noopener noreferrer"><img src={this.props.data.photo} /></a>
                    </div>
                    <div className="card-description pl-1 pr-1 pb-3">
                        <a className="text-align-center" href={this.props.data.url}><h4>{this.props.data.name}</h4></a>
                        <p>{this.props.data.description}</p>
                        <div className="music-icons">
                            {
                                (this.props.data.links.musescore != null) ?
                                <a href={this.props.data.links.musescore} target="_blank" rel="noopener noreferrer"><i>Musescore</i></a> :
                                <div></div>
                            }
                            {
                                (this.props.data.links.download != null) ?
                                <a href={this.props.data.links.download} target="_blank" rel="noopener noreferrer"><i>Download</i></a> :
                                <div></div>
                            }
                        </div>
                    </div>
                </div>
            )
        } else if (this.props.type === "project") {
            if (this.props.data.photo != null) {
                return (
                    <div className={this.state.cardClass} ref={this.view}>
                        <div className="">
                            <a href={this.props.data.url} target="_blank" rel="noopener noreferrer"><img src={this.props.data.photo} /></a>
                        </div>
                        <div className="card-description pl-1 pr-1">
                            <a className="text-align-center" href={this.props.data.url}><h4>{this.props.data.name}</h4></a>
                            <p>{this.props.data.description}</p>
                            <p className="text-align-center"><i>{this.props.data.tech}</i></p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className={this.state.cardClass} ref={this.view}>
                        <div className="card-description pl-1 pr-1">
                            <a className="text-align-center" href={this.props.data.url}><h4>{this.props.data.name}</h4></a>
                            <p>{this.props.data.description}</p>
                            <p className="text-align-center"><i>{this.props.data.tech}</i></p>
                        </div>
                    </div>
                )
            }
        }
        return (
            <div ref={this.view}></div>
        )
	}
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Card;
