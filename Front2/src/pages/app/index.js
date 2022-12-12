import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App";
import Main from "./Main";

import { CookiesProvider } from "react-cookie";


//const root = ReactDOM.createRoot(document.getElementById('root'));
const AppPage = () => {
/*React.createElement(
    <React.StrictMode>
        <CookiesProvider>
            <App />
        </CookiesProvider>
    </React.StrictMode>,
);*/

    return(
        <App/>
    )
}
export default AppPage;