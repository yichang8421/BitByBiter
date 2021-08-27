import styled from "styled-components";
import {Link} from "react-router-dom";
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
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
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
            }
            
        }
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/money">
                        <Icon name={"money"}/>
                        <span>记账</span>
                    </Link>
                </li>
                <li>
                    <Link to="/labels">
                        <Icon name={"label"} fill="green"/>
                        <span>标签</span>
                    </Link>
                </li>
                <li>
                    <Link to="/statistics">
                        <Icon name={"statistics"}/>
                        <span>统计</span>
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;