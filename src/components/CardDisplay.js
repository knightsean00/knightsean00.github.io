import React from "react";
import PropTypes from 'prop-types';
import "../common/main.scss";
import Card from "./Card";
import music from "../common/music";
import projects from "../common/projects";


class CardDisplay extends React.Component {
    render() {
        let data = (this.props.type === "music") ? music : projects;

        return (
            <div className="container">
                <div className="card-container">
                    <a className="no-underline white pb-5 pt-3" href="/"><h2>Home</h2></a>
                    {
                        
                        data.map(i => {
                            return <Card key={i.name} type={this.props.type} data={i} color="black" />
                        })
                    }
                </div>
            </div>
        )
    }
}

CardDisplay.propTypes = {
    type: PropTypes.string.isRequired,
}

export default CardDisplay;