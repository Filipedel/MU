import React from 'react';
import Head from 'next/head';
import Script from "next/script";
import { useEffect } from 'react';
import Aside from "./Aside";


const config = {
    speed: 1,
    speedAdjFactor: 0.7,
    density: 10,
    shape: "circle",
    warpEffect: true,
    warpEffectLength: 5,
    depthFade: true,
    starSize: 3,
    backgroundColor: "hsl(0, 0%, 0%)",
    starColor: "#FFFFFF"
};

const DocLayout = (props) => {
/*    useEffect(() => {
        new WarpSpeed("canvas", {"speed":1,"speedAdjFactor":0.6,"density":1.8,"shape":"circle","warpEffect":true,"warpEffectLength":8,"depthFade":true,"starSize":4,"backgroundColor":"#60bef8","starColor":"#fff"})
    }, [])*/

    return (
            <div>
                <Head>
                    <title>{props.pageTitle}</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="shortcut icon" type="image/png" href="/assets/images/documentation/favicon.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet"/>
                    <link rel="stylesheet" href="/assets/css/documentation/animate.css"/>
                    <link rel="stylesheet" href="/assets/css/documentation/icomoon.css"/>
                    <link rel="stylesheet" href="/assets/css/documentation/bootstrap.css"/>
                    <link rel="stylesheet" href="/assets/css/documentation/flexslider.css"/>
                    <link rel="stylesheet" href="/assets/css/documentation/owl.carousel.min.css"/>
                    <link rel="stylesheet" href="/assets/css/documentation/owl.theme.default.min.css"/>
                    <link rel="stylesheet" href="/assets/css/documentation/documentation.css" />
                    <Script src="/public/assets/js-documentation/modernizr-2.6.2.min.js"></Script>
                    <Script src="/public/assets/js-documentation/respond.min.js"></Script>
                    <Script src="/public/assets/js-documentation/jquery.min.js"></Script>
                    <Script src="/public/assets/js-documentation/jquery.easing.1.3.js"></Script>
                    <Script src="/public/assets/js-documentation/bootstrap.min.js"></Script>
                    <Script src="/public/assets/js-documentation/jquery.waypoints.min.js"></Script>
                    <Script src="/public/assets/js-documentation/jquery.flexslider-min.js"></Script>
                    <Script src="/public/assets/js-documentation/owl.carousel.min.js"></Script>
                    <Script src="/public/assets/js-documentation/jquery.countTo.js"></Script>
                    <Script src="/public/assets/js-documentation/main.js"></Script>
                    <Script src="/public/assets/js-documentation/warpspeed.min.js"></Script>




                </Head>
                <div className="background" style={{zIndex:"1"}}>
                    <canvas id="canvas"></canvas>
                </div>
                <div id="colorlib-page">
                    <div className="container-wrap">
                        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                           data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
                        <Aside/>
                        <div id="colorlib-main">
                            {props.children}
                        </div>

                    </div>


                </div>

            </div>
        )
}
export default DocLayout;