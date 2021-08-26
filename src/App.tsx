import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,

} from "react-router-dom";
import Layout from "components/Layout";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/labels">
                    <Labels/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

function Money() {
    return(
        <Layout>
            <h2>Money</h2>
        </Layout>
    )
}

function Labels() {
    return (
        <Layout>
            <h2>Labels</h2>
        </Layout>
    );
}

function Statistics() {
    return (
        <Layout>
            <h2>Statistics</h2>
        </Layout>
    );
}

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default App;
