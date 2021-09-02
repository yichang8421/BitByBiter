import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const NotesSelection = styled.section``;

const TagsSelection = styled.section`
    background: #fff;
    border:1px solid red;
    > ol{
        padding:0 16px;
        display: flex;
        flex-wrap: wrap;
        >li{
          &.selected{
            //background: #ff6200;
            //border:1px solid red;
            //box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            border-radius: 20px;
          }
            
            width: 20%;            
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 6px 18px;
            font-family: inherit;
            font-size: 14px;
            font-weight: bolder;
            margin: 8px 8px;
        }
    }
`;

const NumperPadSelection = styled.section``;

function Money() {
    return (
        <Layout>
            <NotesSelection>
                <label>备注</label>
                <input type="text"/>
            </NotesSelection>
            <TagsSelection>
                <ol>
                    <li className="selected">
                        <Icon name={"add"} />
                        添加
                    </li>
                    <li className="selected">
                        <Icon name={"cloth"} />
                        <span>衣服</span>
                    </li>
                    < li className="selected">
                        <Icon name={"eat"} />
                        <span>吃饭</span>
                    </li>
                    <li className="selected">
                        <Icon name={"dwell"} />
                        <span>住房</span>
                    </li>
                    <li className="selected">
                        <Icon name={"travel"} />
                        <span>出行</span>
                    </li>
                    <li className="selected">
                        <Icon name={"cloth"} />
                        <span>衣服</span>
                    </li>
                    <li className="selected">
                        <Icon name={"eat"} />
                        <span>吃饭</span>
                    </li>
                    <li className="selected">
                        <Icon name={"dwell"} />
                        <span>住房</span>
                    </li>
                    <li className="selected">
                        <Icon name={"travel"} />
                        <span>出行</span>
                    </li>
                    <li className="selected">
                        <Icon name={"cloth"} />
                        <span>衣服</span>
                    </li>
                    <li className="selected">
                        <Icon name={"eat"} />
                        <span>吃饭</span>
                    </li>
                </ol>
            </TagsSelection>
            <NumperPadSelection>
                <div className="result">100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>AC</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>×</button>
                    <button>保存</button>
                    <button>%</button>
                    <button>0</button>
                    <button>.</button>
                    <button>÷</button>
                    <button>=</button>
                </div>
            </NumperPadSelection>
        </Layout>
    );
}

export default Money;