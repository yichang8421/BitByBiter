import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";


const NotesSelection = styled.section``;

const TagsSelection = styled.section`
    background: #fff;
`;
const TagList = styled.ol`
    >li{
        background: #ff6200;
        border-radius: 18px;
        display: inline-block;
        padding: 3px 18px;
        font-size: 14px;
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
                <TagList>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </TagList>
                <button>新增标签</button>
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