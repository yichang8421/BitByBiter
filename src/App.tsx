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

const Nav = styled.div`
    border: 1px solid blue;
    >ul{
        display: flex;
        >li{
            width: 33.3333%;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding: 16px;
            //padding:4px 0;
            justify-content: center;
            align-items: center;
            //.icon{
            //    width: 24px;
            //    height: 24px;
            //}
        }
    }
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

                <Nav>
                    <ul>
                        <li>
                            <Link to="/money">记账</Link>
                        </li>
                        <li>
                            <Link to="/labels">标签</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                    </ul>
                </Nav>
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
