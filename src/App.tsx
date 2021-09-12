import React from "react";
import {HashRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import Money from "./views/Money";
import Ledger from "./views/Ledger";
import Statistics from "./views/Statistics";
import {TagsList} from "./views/component/EditTags/TagsList";
import {EditTag} from "./views/component/EditTags/EditTag";
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
                    <Route exact path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/ledger">
                        <Ledger/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route exact path="/edit">
                        <TagsList/>
                    </Route>
                    <Route exact path="/edit/:tag">
                        <EditTag/>
                    </Route>
                    <Redirect exact from="/" to="money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App;
