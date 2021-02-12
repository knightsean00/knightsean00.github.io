import React from "react";
import "../../common/main.scss";
import "./home.scss";
import Header from '../../components/Header';

const extensionLink = "https://chrome.google.com/webstore/detail/busysquirrels/bcnejdoncdomkjldoifhampobhdedhki?hl=en-US"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: window.scrollY
        }
        this.scrollListen = this.scrollListen.bind(this);
        this.scrollTo = this.scrollTo.bind(this);

        this.top = React.createRef();
        this.about = React.createRef();
        this.projects = React.createRef();
        this.music = React.createRef();

        this.links = {"HOME": this.top, 
            "ABOUT": this.about, 
            "PROJECTS": this.projects, 
            "MUSIC": this.music,
            "RESUME": process.env.PUBLIC_URL + "/pdfs/sean-knight-resume.pdf"
        };
    }

    scrollTo(event) {
        if (typeof(this.links[event.target.innerText]) === "string" || this.links[event.target.innerText] instanceof String) {
            window.open(this.links[event.target.innerText])
        } else if (this.links[event.target.innerText]){
            this.links[event.target.innerText].current.scrollIntoView();
        }
    }

    scrollListen() {
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
                <Header scrollTo={this.scrollTo} order={["ABOUT", "PROJECTS", "MUSIC", "RESUME"]}/>
                <div className={scrollClass}></div>
                <div className="hero" ref={this.home}>
                    <h1 className={heroText}>Welcome</h1>
                </div>
                <div className="section bg-white" ref={this.about}>
                    <div className="container pt-5 pb-5">
                        <h2 className="section-title" onClick={this.scrollTo}>About</h2>
                        <div className="section-text pl-2 pr-2">
                            <p>Hi! My name is Sean. I am currently a second-year at MIT studying Computation and Cognition (Course 6-9). Although I have been interested in 
                            computer science for as long as I can remember, studying neuroscience is fairly new to me. I am excited to learn more about the intersection 
                            between the two fields, as well as how each of the fields can inform the other.</p>
                            <p>This past IAP, I spent a majority of my time at BusySquirrels developing the <a href={extensionLink}>company's browser extension</a>. 
                            The extension was built with React, Webpack, Browser Extension Polyfill, GraphQL, and a myriad of AWS resources. I also worked on
                            authentication flows and product sorting for the <a href="https://busysquirrels.com/">company website</a>.</p>
                            <p>At MIT, I serve as a committee member for the Student Events Board (formerly UA Events) and a member of 
                                logistics and marketing team for <a href="https://hackmit.org/">HackMIT</a>.</p>
                            <p>Aside from my primary field of study, I am also seeking a minor in Business Management and Comparative Media Studies. 
                                In my spare time I can usually be found playing video games or practicing cello/piano. </p>
                        </div>
                    </div>
                </div>
                <div className="section bg-black" ref={this.projects}>
                    <h2 className="section-title" onClick={this.scrollTo}>Projects</h2>
                </div>
                <div className="section bg-white" ref={this.music}>
                    <h2 className="section-title" onClick={this.scrollTo}>Music</h2>
                </div>
            </div>
            
        )
	}
}

export default Home;
