import Nav from "components/Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    border: 1px solid red;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //line-height: 24px;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
`;
const TabsSelection = styled.section``;

const Main = styled.div`
    border: 1px solid green;
    flex-grow: 1;
    overflow: auto;
`;

const Layout = (props: any) => {
    return (
        <div>
            <Wrapper>
                <TabsSelection>
                    <ul>
                        <li>支出</li>
                        <li>收入</li>
                    </ul>
                </TabsSelection>
                <Main>
                    {props.children}
                </Main>
                <Nav/>
            </Wrapper>
        </div>
    );
};

export default Layout;