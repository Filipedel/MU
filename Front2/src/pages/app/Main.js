import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Home from '../../components/App/Home/home'
import Playlist from '../../components/App/Playlist/playlist';
import Tracks from "../../components/App/Playlist/Tracks/Tracks";
import Emotion from "../../components/App/emotion/emotion";
import Jour from "../../components/App/SonJour/SonJour";
import Rel from "../../components/App/Releases/release"

import dynamic from 'next/dynamic'

//Server Side-rendering, !garder le boolean en false!
//sinon, trigger l'erreur : ReferenceError: document is not defined
const HomeSSR = dynamic(
    () => import('../../components/App/Home/home'),
    { ssr: false }
)

const Main = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <div>
            { pathname === '/app' && <HomeSSR /> }
            { pathname === '/app/playlist' && <Playlist /> }
            { pathname === '/app/playlist/Tracks' && <Tracks /> }
            { pathname === '/app/emotion' && <Emotion /> }
            { pathname === '/app/sonjour' && <Jour /> }
            { pathname === '/app/releases' && <Rel /> }
        </div>
    );
}

export default Main;
