import React from "react";
import "../common/main.scss";
import "./header.scss";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: window.scrollY,
            menuOpen: false,
            desktopHeader: "header-links hidden-xs hidden-sm hidden-md",
            mobileHeader: "mobile-header hidden-lg hidden-xl"
        }
        this.scrollListen = this.scrollListen.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.scrollMenu = this.scrollMenu.bind(this);
    }

    toggleMenu(event) {
        if (!event.target.parentElement.classList.contains("fade") || event.target.parentElement.classList.contains("mobile-menu")) {
            this.setState({menuOpen: !this.state.menuOpen,
                desktopHeader: "header-links hidden-xs hidden-sm hidden-md",
                mobileHeader: "mobile-header hidden-lg hidden-xl"
            });
        }
    }

    scrollMenu(event) {
        this.setState({menuOpen: !this.state.menuOpen}, () => {
            document.body.style.overflow = "auto";
            this.props.scrollTo(event);
        });
        
    }

    scrollListen() {
        this.setState({scroll: window.scrollY}, () => {
            if (this.state.scroll > 0) {
                this.setState({
                    desktopHeader: "header-links fade hidden-xs hidden-sm hidden-md",
                    mobileHeader: "mobile-header fade hidden-lg hidden-xl"
                })
            } else {
                this.setState({
                    desktopHeader: "header-links show hidden-xs hidden-sm hidden-md",
                    mobileHeader: "mobile-header show hidden-lg hidden-xl"
                })
            }
        });
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollListen);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollListen);
    }

	render() {
        if (!this.state.menuOpen) {
            document.body.style.overflow = "auto";
            return(
                <header>
                    <div className="container pl-1 pr-1">
                        <ul className={this.state.desktopHeader}>
                            {
                                this.props.order.map(i => {
                                    return <li key={i}><h4 onClick={this.props.scrollTo} className="header-text">{i}</h4></li>
                                })
                            }
                        </ul>
                        <div className={this.state.mobileHeader}>
                            <h4 className="header-text text-align-center" onClick={this.toggleMenu}>Menu</h4>
                        </div>
                    </div>
                </header>
            )
        }
        else {
            document.body.style.overflow = "hidden";
            return (
                <div className="mobile-menu hidden-lg hidden-xl">
                    <h4 className="header-text top" onClick={this.toggleMenu}>Close</h4>
                    <ul className="pl-1 pr-1 pt-2 pb-2 mobile-links">
                        {
                            this.props.order.map(i => {
                                return <li key={i}><h2 onClick={this.scrollMenu} className="header-text">{i}</h2></li>
                            })
                        }
                    </ul>
                </div>
            )
        }
	}
}

export default Header;
