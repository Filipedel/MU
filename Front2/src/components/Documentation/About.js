import React, { Component } from 'react';

export default class About extends Component {
    constructor(){
        super()
    }
    
    render(){
        return (
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">À propos</span>
                                            <h2 className="colorlib-heading">Vision du projet</h2>
                                            <p>La vision de notre projet <strong>Muzik</strong> est de créer une
                                                application qui offre une expérience d'écoute de musique encore plus
                                                personnelle et intuitive pour les utilisateurs de Spotify. En connectant
                                                votre compte Spotify à notre application, vous aurez accès à des données
                                                détaillées sur vos écoutes passées, vous permettant de <strong>mieux
                                                    comprendre vos préférences musicales</strong>.<br/><br/>De plus, notre
                                                application vous proposera des <strong>suggestions d'écoutes
                                                    personnalisées</strong> en fonction de vos <strong>données
                                                    d'écoute</strong>, ou bien de votre <strong>humeur</strong>, vous
                                                aidant à découvrir de nouvelles musiques et artistes qui pourraient
                                                vous plaire. Avec Muzik, vous pourrez profiter d'une expérience
                                                d'écoute encore plus <strong>immersive et agréable</strong>.<br/><br/>Nous
                                                voulons faire de Muzik une application idéale pour tous les
                                                amateurs de musique souhaitant accéder facilement à leurs
                                                données d'écoute et découvrir de nouvelles musiques.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInRight">
                                    <h3 id="hobbies" className="colorlib-heading">Valeurs du projet</h3>
                                </div>
                                <div className="row">
                                    <div className="row-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="hobbies color-2">
                                            <span className="icon2"><i className="icon-album"></i></span>
                                            <h3>la Simplicité</h3>
                                            <p>Nous croyons qu'il est important de pouvoir facilement accéder à vos
                                                données d'écoute et d'obtenir des suggestions d'écoutes personnalisées
                                                en fonction de vos goûts musicaux. Avec Muzik, vous pouvez facilement
                                                lier votre compte Spotify et accéder à des informations plus détaillées
                                                sur vos écoutes qu'avec Spotify Wrapped.</p>
                                        </div>
                                    </div>
                                    <div className="row-md-3 animate-box" data-animate-effect="fadeInRight">
                                        <div className="hobbies color-3">
                                            <span className="icon2"><i className="icon-cloud"></i></span>
                                            <h3>le Partage</h3>
                                            <p>Dans sa forme finale, nous souhaitons à oeuvrer de sorte à ce que Muzik
                                                vous aide à pouvoir découvrir de nouvelles musiques et à mieux apprécier
                                                celles que vous aimez déjà. En plus de vous offrir un accès facile à vos
                                                données d'écoute et de vous proposer des suggestions de musique
                                                personnalisées, Muzik vous permet également de partager vos listes de
                                                lecture avec vos amis et de découvrir ce qu'ils écoutent. Vous pourrez
                                                également suivre vos artistes préférés et recevoir des notifications
                                                lorsqu'ils sortent de nouvelles chansons ou de nouveaux albums. Enfin,
                                                Muzik vous permettra de découvrir de nouvelles musiques grâce à des
                                                fonctionnalités telles que la découverte de genres ou d'artistes
                                                similaires à ceux que vous aimez.</p>
                                        </div>
                                    </div>
                                    <div className="row-md-3 animate-box" data-animate-effect="fadeInTop">
                                        <div className="hobbies color-4">
                                            <span className="icon2"><i className="icon-lock"></i></span>
                                            <h3>la Sécurité</h3>
                                            <p>Nous comprenons que vos données d'écoute sont personnelles et que vous
                                                souhaitez les protéger. Aucune de vos données sont stockées en dur sur
                                                nos serveurs, de sorte à garantir la confidentialité de vos
                                                informations.</p>
                                        </div>
                                    </div>
                                    <div className="row-md-3 animate-box" data-animate-effect="fadeInBottom">
                                        <div className="hobbies color-1">
                                            <span className="icon2"><i className="icon-hand"></i></span>
                                            <h3>l'Accessibilité</h3>
                                            <p>Nous croyons que la musique est un bien culturel universel et que tout le
                                                monde devrait avoir accès à de la musique de qualité, quel que soit son
                                                budget ou sa situation géographique. C'est pourquoi nous avons conçu
                                                Muzik pour être accessible à tous, quels que soient votre appareil,
                                                votre connexion internet ou votre niveau d'expertise en matière de
                                                musique. Nous visons à simplifier notre interface pour la rendre aussi
                                                intuitive que possible, ainsi que d'optimiser notre application pour
                                                qu'elle fonctionne de façon fluide même sur des appareils de faible
                                                puissance ou des connexions internet limitées.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}