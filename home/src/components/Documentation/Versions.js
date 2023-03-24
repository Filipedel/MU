import React from 'react';
import Features from "../Features";


const Versions = () => {
    return (
            <section className="colorlib-experience" data-section="experience">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                             data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Versions</span>
                            <h2 className="colorlib-heading animate-box" style={{width:"500px"}}>Historique des
                                versions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="timeline-centered">
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-3"><i className="icon-pencil5"></i>
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="">Version alpha</a><span>latest</span></h2>
                                            <p>à venir.</p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-2"><i className="icon-pencil5"></i>
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://github.com/Filipedel/mu/releases/tag/v0.4">v0.4</a>
                                            </h2>
                                            <p>
                                                <ul>
                                                    <li>Modification de l'interface</li>
                                                    <li>Sélection de musique selon l'humeur</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-1"><i className="icon-pencil5"></i>
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://github.com/Filipedel/mu/releases/tag/v0.3">v0.3</a>
                                            </h2>
                                            <p>
                                                <ul>
                                                    <li>L'utilisateur a la possibilité de sauvegarder son
                                                        identifiant pour ces prochaines visites
                                                    </li>
                                                    <li>L'utilisateur peut voir le contenu de ces playlist Spotify,
                                                        directement sur le site.
                                                    </li>
                                                    <li>Une documentation a été ajouté pour faciliter la
                                                        compréhension du fonctionnement du site pour l'utilisateur.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-5"><i className="icon-pencil5"></i>
                                        </div>
                                        <div className="timeline-label">
                                            <h2><a href="https://github.com/Filipedel/mu/releases/tag/v0.2">v0.2</a>
                                            </h2>
                                            <p>Mise en place de l'infrastructure et de fonctionnalités essentielles
                                                :
                                                <ul>
                                                    <li>Ajout d'une page d'accueil sommaire avec une explication du
                                                        fonctionnement de l'application et l'accès aux autres pages
                                                        du projet.
                                                    </li>
                                                    <li>Bouton permettant de renvoyer l'utilisateur vers son compte
                                                        Spotify afin de récupérer son nom d'utilisateur.
                                                    </li>
                                                    <li>Bouton permettant d'accéder a la page des Playlist</li>
                                                    <li>Bouton permettant d'accéder a la page des Playlist</li>
                                                    <li>Page des playlist permettant via un nom d'utilisateur
                                                        Spotify, de récupérer toutes les playlist publiques de
                                                        l'utilisateur.
                                                    </li>
                                                    <li>Refonte du système de gestion des pages en back, le
                                                        fonctionnement est maintenant similaire aux fragments
                                                    </li>
                                                </ul>
                                                En cours de production :
                                                <ul>
                                                    <li>Cookie permettant de stocker le nom d'utilisateur dans un
                                                        cookie pour que l'utilisateur n'ai pas a réécrire son nom
                                                        d'utilisateur à chaque fois.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article className="timeline-entry begin animate-box"
                                         data-animate-effect="fadeInBottom">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-none"></div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInBottom">
                        <div className="section" style={{fontSize:"1.2em"}}><a href="documents/documentation.pdf"
                                                                               target="_blank" className="button1"
                                                                               style={{borderColor:"#fff",backgroundColor:"rgba(0,0,0,0)",color:"#fff"}}>Consulter
                            la documentation</a></div>
                    </div>
                </div>
            </section>
        )
}
export default Versions;