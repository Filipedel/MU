import React,{ Component } from 'react';
import Link from 'next/link';

export default class Nav extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

      if (window.scrollY > 70) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".menu-toggler");
        let mainNav = document.querySelector(".main-navigation");

        mainNavToggler.addEventListener("click", function () {
            mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
        });
    }

    render(){
        return (

            <header className="site-header site-header__header-one mt-5">
                <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky mt-5 stricky-fixed' : ''}`}>
                {/* <nav className={`navbar navbar-expand-lg navbar-light header-navigation stricky mt-5 ${this.state.sticky ? 'stricked-menu stricky-fixed' : ''}`}> */}

                    <div className="container clearfix">
                        <div className="logo-box clearfix">
                            <a className="navbar-brand" href="/">
                                <img src="/assets/images/resources/logo2.png" className="main-logo" width="300"
                                     alt="Muzik Logo" />
                            </a>
                            <button className="menu-toggler">
                                <span className="fa fa-bars"></span>
                            </button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" one-page-scroll-menu navigation-box">
                                {
                                    /*<li className="scrollToLink">
                                        <a href="#features">Features</a>
                                    </li>*/}
                                {
                                    <li className="scrollToLink">
                                        <a href="https://adambouarroudj.com/">Documentation</a>

                                    </li>

                                }
                                {/*<li className="scrollToLink">*/}
                                {/*    { <a href="#video">Video</a> }*/}

                                {/*</li>*/}
                            </ul>
                        </div>
                        {/* <div className="right-side-box">
                            <a className="thm-btn header__cta-btn" href="#"><span>Login</span></a>
                        </div> */}
                    </div>
                </nav>
            </header>
        )
    }
}