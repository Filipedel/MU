import React from "react";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

function Index() {
    const router = useRouter();
    const [cookies, setCookie] = useCookies([]);

    return (
        <CookiesProvider cookies={cookies} setCookies={setCookie}>
            <App router={router} />
        </CookiesProvider>
    );
}

export default Index;
