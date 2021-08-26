import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,

} from "react-router-dom";
import styled from "styled-components";
import Nav from "components/Nav";

const Wrapper = styled.div`
    border: 1px solid red;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    
`;

const Main = styled.div`
    border: 1px solid green;
    flex-grow: 1;
    overflow: auto;
`;

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav/>
            </Wrapper>
        </Router>
    );
}

function Money() {
    return <h2>Money</h2>;
}

function Labels() {
    return <h2>Labels</h2>;
}

function Statistics() {
    return <h2>Statistics</h2>;
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
