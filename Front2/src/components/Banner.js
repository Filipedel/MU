import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                {/* <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">Vos données d'écoutes <br />
                                    en <span>détails</span>.</h3>
                                <p className="banner-one__text">
                                Découvrez-en plus sur vos données d'écoutes et accédez à des fonctionnalités supplémentaires avec <span>Muzik</span>.
                                </p>

                                <a href="/app" className="banner-one__btn thm-btn ">
                                    <span>Accéder à l'application <i href="#" className="fa fa-cloud-upload ml-1" ></i>
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="banner-one__moc">
                        <img src="/assets/images/mocs/banner-moc-1-1.png" alt="Awesome Image"/>
                    </div>
                </div>
            </section>
        )
}
export default Banner;