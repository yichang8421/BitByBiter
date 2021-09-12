import React from "react";
import Layout from "../../../components/Layout";
import {useTags} from "useTags";
import styled from "styled-components";
import Icon from "../../../components/Icon";

const Title = styled.span`
    font-size: 18px;
    color: #2a9e78;
    font-weight: bolder;
    background: #f5f5f5;
    line-height: 20px;
    margin: 14px 0;
`;

const TagList = styled.ol`
    font-size: 16px;
    background: white;
    >li{
        color:#d39e33;
        font-weight: bolder;
        border-bottom: 1px solid #d5d5d9;
        margin-left: 16px;
        margin-right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 40px;
        >span{
            flex-grow: 1;
            height: 40px;
        }
    }
`;

const Button = styled.button`
color:#2a9e78;
    font-size: 16px;
    font-weight: bolder;
    border: none;
    padding: 8px 12px;
    background: #f4faff;
    &:active {
        box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
            color:#00aeff;
    }
`;

const ElementCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Space = styled.div`
    height: 16px;
`;

const EditTags = () => {
    const {tags, setTags} = useTags();
    return (
        <Layout>
            <ElementCenter>
                <Title>编辑标签</Title>
            </ElementCenter>
            <TagList>
                {tags.map(tag =>
                    <li key={tag}>
                        <span>{tag}</span>
                        <Icon name={"delete"}/>
                    </li>
                )}
            </TagList>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <ElementCenter><Button>新增标签</Button></ElementCenter>
        </Layout>
    );
};

export {EditTags};