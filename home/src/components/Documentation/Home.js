import React, { Component } from 'react';

export default class Home extends Component {
    constructor(){
        super()
    }
    
    render(){
        return (
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight" style={{backgroundColor:"transparent"}}>
                        <ul className="slides">
                            <div style={{backgroundImage: "url(/assets/images/documentation/giphy.gif)"}}>
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div
                                            className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Bienvenue !<br/></h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </section>
        )
    }
}