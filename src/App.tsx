import React from "react";
import {HashRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Money from "./views/Money";
import Ledger from "./views/Ledger";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/ledger">
                    <Ledger/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="ledger"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
