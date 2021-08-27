import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
// @ts-ignore
import Icon from "components/Icon";

const NavWrapper = styled.div`
    //border: 1px solid blue;
    line-height: 24px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    >ul{
        display: flex;
        
        >li{
            width: 33.3333%;            
            text-align: center;

            >a{
              display: flex;
              flex-direction: column;
              padding:4px 0;
              justify-content: center;
              align-items: center;
              
                  >.icon{
                    width: 24px;
                    height: 24px;
                  }
                  
              &.selected{
                color: darkgrey;
                box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
              }
            }
        }
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/ledger" activeClassName="selected">
                        <Icon name={"ledger"} fill="green"/>
                        <span>收支明细</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name={"money"}/>
                        <span>记一笔</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name={"statistics"}/>
                        <span>统计</span>
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;