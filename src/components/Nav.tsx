import styled from "styled-components";
import React from "react";
// @ts-ignore
import NavIcon from "components/NavIcon";
import LedgerIcon from "icons/layout/ledger.svg";
import LedgerIconSelected from "icons/layout/ledger_selected.svg";
import MoneyIcon from "icons/layout/money.svg";
import MoneyIconSelected from "icons/layout/money_selected.svg";
import statisticsIcon from "icons/layout/statistics.svg";
import statisticsIconSelected from "icons/layout/statistics_selected.svg";


const NavWrapper = styled.div`
    //border: 1px solid blue;
    background: white;
    line-height: 24px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
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
                color: #ffd91c;
                box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
                .icon{
                  fill: red;
                }
              }
            }
        }
    }
`;

const Nav = () => {
    // @ts-ignore
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavIcon pathname={"/ledger"} name={"收支明细"} defaultIcon={LedgerIcon} selectedIcon={LedgerIconSelected}/>
                </li>
                <li>
                    <NavIcon pathname={"/money"} name={"记一笔"} defaultIcon={MoneyIcon} selectedIcon={MoneyIconSelected}/>
                </li>
                <li>
                    <NavIcon pathname={"/statistics"} name={"统计"} defaultIcon={statisticsIcon} selectedIcon={statisticsIconSelected}/>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;