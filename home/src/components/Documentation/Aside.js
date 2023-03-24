import React, {Component} from 'react';

export default class Aside extends Component {
    constructor() {
        super()
        this.state = {
            sticky: false
        };
    }

    render(){
        return (
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                <div className="text-center">
                    <div className="author-img" style={{backgroundImage: "url(/assets/images/documentation/avatar.png)"}}></div>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li className="active"><a href="#" data-nav-section="home">Bonjour</a></li>
                            <li><a href="#" data-nav-section="about">À propos</a></li>
                            <li><a href="#" data-nav-section="services">Equipe</a></li>
                            <li><a href="#" data-nav-section="experience">Versions</a></li>
                            <li><a href="#" data-nav-section="contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="colorlib-footer">
                    <ul></ul>
                </div>
            </aside>
        )

    }
}