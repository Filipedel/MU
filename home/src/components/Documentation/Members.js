import React, { Component } from 'react';

export default class Members extends Component {
    constructor(){
        super()
    }
    
    render(){
        return (
                <section className="colorlib-services" data-section="services">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Equipe</span>
                                <h2 className="colorlib-heading">Les membres</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md center">
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-7">
                                    <span className="icon7"><i className="icon-user"></i></span>
                                    <div className="desc">
                                        <h3>Louis-Filipe<br/>Delaunay</h3>
                                        <p>Dev back-end<br/><br/><a style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                                                    href="https://github.com/Filipedel" target="_blank"
                                                                    rel="noreferrer noopener"><i
                                            className="icon-github"></i></a><a
                                            style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                            href="https://fr.linkedin.com/in/louis-filipe-delaunay-b9109821b"
                                            target="_blank" rel="noreferrer noopener"><i className="icon-linkedin2"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-8">
                                    <span className="icon8"><i className="icon-user"></i></span>
                                    <div className="desc">
                                        <h3>Alexis<br/>Geoffroy</h3>
                                        <p>Dev back-end<br/><br/><a style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                                                    href="https://github.com/carnaring" target="_blank"
                                                                    rel="noreferrer noopener"><i
                                            className="icon-github"></i></a><a
                                            style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                            href="https://fr.linkedin.com/in/alexis-geoffroy-557367197" target="_blank"
                                            rel="noreferrer noopener"><i className="icon-linkedin2"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon"><i className="icon-user"></i></span>
                                    <div className="desc">
                                        <h3>Waly<br/>Dia</h3>
                                        <p>Dev front-end<br/><br/><a style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                                                     href="https://github.com/Jorimou" target="_blank"
                                                                     rel="noreferrer noopener"><i
                                            className="icon-github"></i></a><a
                                            style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                            href="https://fr.linkedin.com/in/waly-dia-6a236422b" target="_blank"
                                            rel="noreferrer noopener"><i className="icon-linkedin2"></i></a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <div className="services color-9">
                                    <span className="icon9"><i className="icon-user"></i></span>
                                    <div className="desc">
                                        <h3>Adam Bouarroudj</h3>
                                        <p>Dev front-end<br/><br/><a style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                                                     href="https://github.com/adambdj" target="_blank"
                                                                     rel="noreferrer noopener"><i
                                            className="icon-github"></i></a><a
                                            style={{fontWeight:"400",fontSize:"25px",padding:"5px"}}
                                            href="https://www.linkedin.com/in/adambouarroudj/" target="_blank"
                                            rel="noreferrer noopener"><i className="icon-linkedin2"></i></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInTop">
                            <div className="section2"><a href="https://github.com/Filipedel/mu" className="button2">Github
                                du projet</a></div>
                        </div>
                    </div>
                </section>
        )
    }
}