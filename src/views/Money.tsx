import Layout from "../components/Layout";
import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Icon from "components/Icon";

const RecordSelection = styled.section`
    border:1px solid red;
    padding: 22px 6px;
    padding-left: 26px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    > label{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: left;
        > span{
            //margin-right: 8px;
            white-space: nowrap;
            font-weight: bolder;
        }
        > select{
            display: block;
            padding: 6px 2px;
                        border:1px solid red;
            font-weight: bolder;
            background: yellowgreen;
            //border:none;
            border-radius: 20px;
        }
    }
    > .output{
        display: block;
        width: 100%;
        background: white;
        margin-left: 16px;
        margin-right: 16px;
        font-size: 28px;
        font-family: Consolas monospace;
        padding: 9px 8px;
        text-align: right;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;    
    }
`;

const NotesSection = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    margin-left: 10px;
    font-size: 14px;
    > label{
        display: flex;
        align-items: center;
        > span{
            margin-right: 16px;
            white-space: nowrap;
        }
        > input{
            display: block;
            width: 100%;
            height: 48px;
            background: none;
            border:none;
        }
    }
`;

const TagsSelection = styled.section`
    background: #fff;
    overflow-x: hidden;
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

const NumperPadSelection = styled.section``;

export const BILL_TYPE = {
    PAYMENT: "payment",
    INCOME: "income",
};

function Money() {
    // const [showTypeOptions, setShowTypeOptions] = useState(false);
    // const onToggle = useCallback(() => {
    //     setShowTypeOptions(!showTypeOptions);
    // }, [showTypeOptions]);

    return (
        <Layout>
            <RecordSelection>
                <label>
                    <span>
                        收支类型
                    </span>
                    <select
                        name="types"
                        id="types"
                        // onChange={onToggle}
                    >
                        <option value="1">收入</option>
                        <option value="2">支出</option>
                    </select>
                </label>
                <div className="output">
                    hello
                </div>
            </RecordSelection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="此处添加备注"/>
                </label>
            </NotesSection>
            <TagsSelection>
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