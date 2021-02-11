import React from "react";
import "../../common/main.scss";
import "./home.scss";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: window.scrollY
        }
        this.scrollListen = this.scrollListen.bind(this);
    }

    scrollListen(event) {
        this.setState({scroll: window.scrollY})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollListen);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollListen);
    }

	render() {
        let scrollClass = (this.state.scroll > 0) ? "scroll scroll-show" : "scroll";
        let heroText = (this.state.scroll > 0) ? "hero-text hero-text-scroll" : "hero-text";
		return (
            <div>
                <div className={scrollClass}></div>
                <div className="hero">
                    <h1 className={heroText}>Welcome</h1>
                </div>
                <div className="section bg-white">
                    <div className="container text-align-center">
                        <h1 className="hidden-xl hidden-lg">About</h1>
                        <p>Hi! My name is Sean. I am currently a second-year at MIT studying Computation and Cognition (Course 6-9). Although I have been interested in 
                        computer science for as long as I can remember, studying neuroscience is fairly new to me. I am excited to learn more about the intersection 
                        between the two fields, as well as how each of the fields can inform the other.</p>
                        <p>This past summer, I spent my time conducting research at the <a href="https://quest.mit.edu/">MIT Quest for Intelligence Initiative</a>. Our team’s goal was 
                            primarily to improve sub-seasonal weather forecasting using machine learning and thereby improve water management.</p>
                        <p>At MIT, I serve as a committee member for the Student Events Board (formerly UA Events) and a member of 
                            logistics and marketing team for <a href="https://hackmit.org/">HackMIT</a>.</p>
                        <p>Aside from my primary field of study, I am also seeking a minor in Business Management and Comparative Media Studies. 
                            In my spare time I can usually be found playing video games or practicing cello/piano. </p>
                    </div>
                    <h2 className="section-text">About</h2>
                </div>
                <div className="section bg-black">
                    <h2 className="section-text">Projects</h2>
                </div>
                <div className="section bg-white">
                    <h2 className="section-text">Music</h2>
                </div>
            </div>
            
        )
	}
}

export default Home;
