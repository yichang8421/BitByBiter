import React from "react";
import {HashRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Money from "./views/Money";
import Ledger from "./views/Ledger";
import Statistics from "./views/Statistics";
import {EditTags} from "./views/component/EditTags/EditTags";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";

const AppWrapper = styled.div`
    color:#333;
`;

function App() {
    return (
        <AppWrapper>
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
                    <Route path="/edit">
                        <EditTags />
                    </Route>
                    <Redirect exact from="/" to="ledger"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
