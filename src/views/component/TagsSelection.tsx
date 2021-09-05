import styled from "styled-components";
import Icon from "../../components/Icon";
import React from "react";
import img from "../../img/记账vue版.jpg";

const TagsSelectionWrapper = styled.section`
    background:#fff;
    //background-image:url(${img});
    //position: relative;
  //flex-grow: 1;
  //opacity: 0.5;
  //background-size: 70%;
  //background-repeat: no-repeat;
  //background-position: bottom 0px right 46px;
  //flex-direction: column-reverse;
    overflow-x: hidden;
    flex-grow: 1;
    > ol{
        margin:0 -12px;
        display: flex;
        flex-wrap: wrap;
        >li{
          &.selected{
            //background: #ff6200;
            //border:1px solid red;
            //box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            //border-radius: 20px;
          }
            
            text-align: center;
            display: flex;
            //flex-direction: column;
            //justify-content: center;
            align-items: center;
            padding: 3px 18px;
            font-family: inherit;
            font-size: 14px;
            font-weight: bolder;
            margin: 8px 8px;
            margin-left: 30px;
            margin-right: 20px;
            padding: 2px 4px;
        }
        
        > .addBtn{
            //border:none;
            border-radius: 20px;
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            background: inherit;
            text-align: center;
            display: flex;
            align-items: center;
            padding: 6px 18px;
            font-family: inherit;
            font-size: 14px;
            font-weight: bolder;
            margin: 8px 8px;
            margin-left: 30px;
            margin-right: 20px;
            padding: 2px 4px;
        }
    }
`;

const TagsSelection = () => {
    return (
        <TagsSelectionWrapper>
            <ol>
                <button className="selected addBtn">
                    <Icon name={"add"}/>
                    添加
                </button>
                <li className="selected">
                    <Icon name={"cloth"}/>
                    <span>衣服</span>
                </li>
                < li className="selected">
                    <Icon name={"eat"}/>
                    <span>吃饭</span>
                </li>
                <li className="selected">
                    <Icon name={"dwell"}/>
                    <span>住房</span>
                </li>
                <li className="selected">
                    <Icon name={"travel"}/>
                    <span>出行</span>
                </li>
                <li className="selected">
                    <Icon name={"cloth"}/>
                    <span>衣服</span>
                </li>
                <li className="selected">
                    <Icon name={"eat"}/>
                    <span>吃饭</span>
                </li>
                <li className="selected">
                    <Icon name={"dwell"}/>
                    <span>住房</span>
                </li>
                <li className="selected">
                    <Icon name={"travel"}/>
                    <span>出行</span>
                </li>
                <li className="selected">
                    <Icon name={"cloth"}/>
                    <span>衣服</span>
                </li>
                <li className="selected">
                    <Icon name={"eat"}/>
                    <span>吃饭</span>
                </li>
                <li className="selected">
                    <Icon name={"eat"}/>
                    <span>吃饭</span>
                </li>
            </ol>
        </TagsSelectionWrapper>
    );
};

export default TagsSelection;