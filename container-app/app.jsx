import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import MicrofrontendContainer from "./microfrontend-container";

const METADATA = [
    {
        id: "1",
        name: "microfrontend-1",
        src: "/microfrontend-1/src/index.js"
    },
    {
        id: "2",
        name: "microfrontend-2",
        src: "/microfrontend-2/src/index.js"
    }
];

export const App =
    <Router>
        <header>
            <Link to={"/"}>Home</Link>
            <div>
                Container App
            </div>
            <ul>
                <li><Link to={"/1"}>Microfrontend 1</Link></li>
                <li><Link to={"/2"}>Microfrontend 2</Link></li>
            </ul>
        </header>
        <section>
            <Switch>
                <Route path={"/1"}>
                    <MicrofrontendContainer metadata={METADATA[0]}/>
                </Route>
                <Route path={"/2"}>
                    <MicrofrontendContainer metadata={METADATA[1]}/>
                </Route>
            </Switch>
        </section>
    </Router>;