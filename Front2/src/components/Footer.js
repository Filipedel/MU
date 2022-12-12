import React,{ Component } from 'react';

export default class Blog extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTop = this.scrollTop.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

      if (window.scrollY > 70) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
            <footer className="site-footer">
                {/* <div className="site-footer__upper">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__about">
                                    <img src="/assets/images/resources/logo2.png" width="180" alt=""
                                         className="footer-widget__logo" />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Accès</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">A propos</a></li>
                                        <li><a href="#">Notre équipe</a></li>
                                        <li><a href="#">Possibilités</a></li>
                                        <li><a href="#">Comment ça marche</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Services</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">blablabla </a></li>
                                        <li><a href="#">blablabla </a></li>
                                        <li><a href="#">blablabla </a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Liens</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">Aide </a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="site-footer__social">
                                        <a href="#" className="fa fa-github"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">&copy; copyright 2022 by <a href="#">MUZIK</a></p>
                        </div>
                    </div>
                </div>
            </footer>

                <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{display: this.state.scrollBtn ? 'block' : 'none'}}><i className="fa fa-angle-up"></i></div>

            </div>
        )
    }
}