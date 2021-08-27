import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const NotesSelection = styled.section``;

const TagsSelection = styled.section`
    background: #fff;
    border:1px solid red;
    > ol{
        padding:0 4px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        >li{
            //background: #ff6200;
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            border-radius: 18px;
            width: 20%;            
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 6px 18px;
            font-size: 14px;
            margin: 8px 0px;
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
                    <li>
                        <Icon name={"cloth"}/>
                        <span>衣服</span>
                    </li>
                    <li>
                        <Icon name={"eat"}/>
                        <span>吃饭</span>
                    </li>
                    <li>
                        <Icon name={"dwell"}/>
                        <span>住房</span>
                    </li>
                    <li>
                        <Icon name={"travel"}/>
                        <span>出行</span>
                    </li>
                    <li>
                        <Icon name={"cloth"}/>
                        <span>衣服</span>
                    </li>
                    <li>
                        <Icon name={"eat"}/>
                        <span>吃饭</span>
                    </li>
                    <li>
                        <Icon name={"dwell"}/>
                        <span>住房</span>
                    </li>
                    <li>
                        <Icon name={"travel"}/>
                        <span>出行</span>
                    </li>
                    <li>
                        <Icon name={"cloth"}/>
                        <span>衣服</span>
                    </li>
                    <li>
                        <Icon name={"eat"}/>
                        <span>吃饭</span>
                    </li>
                    <li>
                        <Icon name={"dwell"}/>
                        <span>住房</span>
                    </li>
                    <li>
                        <Icon name={"travel"}/>
                        <span>出行</span>
                    </li>
                    <li>
                        <Icon name={"cloth"}/>
                        <span>衣服</span>
                    </li>
                    <li>
                        <Icon name={"eat"}/>
                        <span>吃饭</span>
                    </li>
                    <li>
                        <Icon name={"dwell"}/>
                        <span>住房</span>
                    </li>
                    <li>
                        <Icon name={"travel"}/>
                        <span>出行</span>
                    </li>
                    <li>
                        <Icon name={"cloth"}/>
                        <span>衣服</span>
                    </li>
                    <li>
                        <Icon name={"eat"}/>
                        <span>吃饭</span>
                    </li>
                    <li>
                        <Icon name={"dwell"}/>
                        <span>住房</span>
                    </li>
                    <li>
                        <Icon name={"travel"}/>
                        <span>出行</span>
                    </li>
                    <li>
                        <Icon name={"add"}/>
                        添加
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