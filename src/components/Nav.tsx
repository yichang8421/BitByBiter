import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require("icons/money.svg");
require("icons/label.svg");
require("icons/statistics.svg");

const NavWrapper = styled.div`
    //border: 1px solid blue;
    line-height: 24px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    >ul{
        display: flex;
        >li{
            width: 33.3333%;
            text-align: center;
            display: flex;
            flex-direction: column;
            padding:4px 0;
            justify-content: center;
            align-items: center;
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);

            .icon{
                width: 24px;
                height: 24px;
            }
        }
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#money"/>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className="icon" fill="green">
                        <use xlinkHref="#label"/>
                    </svg>
                    <Link to="/labels">标签</Link>
                </li>
                <li>
                    <svg className="icon">
                        <use xlinkHref="#statistics"/>
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;