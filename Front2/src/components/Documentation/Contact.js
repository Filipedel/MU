import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(){
        super()
    }
    
    render(){
        return (
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Contact</span>
                            <h2 className="colorlib-heading">Nous écrire</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon" style={{borderRadius:"10px"}}><i
                                    className="icon-at-sign"></i></div>
                                <div className="colorlib-text">
                                    <p><a href="mailto:bdj.adam@gmail.com">bdj.adam@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="colorlib-feature colorlib-feature-sm animate-box"
                                 data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon" style={{borderRadius:"10px"}}><i
                                    className="icon-compass5"></i></div>
                                <div className="colorlib-text">
                                    <p>Paris</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-md-push-1">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
                                     data-animate-effect="fadeInRight">
                                    <form action="https://formspree.io/maarblpm" method="POST">
                                        <div className="form-group"><input type="text" className="form-control"
                                                                           placeholder="Votre nom" name="name"/>
                                        </div>
                                        <div className="form-group"><input type="text" className="form-control"
                                                                           placeholder="Votre @dresse"
                                                                           name="_replyto"/></div>
                                        <div className="form-group"><input type="text" className="form-control"
                                                                           placeholder="Objet" name="Sujet"/></div>
                                        <div className="form-group"><textarea id="message" cols="30" rows="7"
                                                                              className="form-control"
                                                                              placeholder="Contenu du mail"
                                                                              name="msg"></textarea></div>
                                        <div className="form-group"><input type="submit"
                                                                           className="btn btn-primary btn-send-message"
                                                                           value="Envoyer"/></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}