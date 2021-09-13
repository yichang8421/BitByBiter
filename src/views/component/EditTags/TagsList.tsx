import React from "react";
import Layout from "components/Layout";
import {useTags} from "useTags";
import styled from "styled-components";
import Icon from "components/Icon";
import {Link} from "react-router-dom";
import {Button} from "components/MyButton";
import {ElementCenter} from "../../../components/CalculatorOutput/ElementCenter";
import {Space} from "../../../components/CalculatorOutput/Space";

const TitleWrapper = styled.div`
    text-align: center;
    line-height: 42px;
    .icon{
        position: absolute;
        top: 8px;
        left: 16px;
    }
`;

const Title = styled.span`
    font-size: 18px;
    color: #2a9e78;
    font-weight: bolder;
    background: #f5f5f5;
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
        >a{
            flex-grow: 1;
            height: 40px;
        }
    }
`;

const TagsList = () => {
    const {tags, addTag, deleteTag} = useTags();
    return (
        <Layout>
            <TitleWrapper>
                <Link to={"/money/"}>
                    <Icon name={"left"}/>
                </Link>
                <Title>
                    标签
                </Title>
            </TitleWrapper>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={"/edit/" + tag.id}>
                            <span>{tag.name}</span>
                        </Link>
                        <Icon
                            name={"delete"}
                            onClick={() => {
                                deleteTag(tag.id);
                            }}
                        />
                    </li>
                )}
            </TagList>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <ElementCenter>
                <Button
                    onClick={() => {
                        addTag();
                    }}
                >新增标签
                </Button>
            </ElementCenter>
        </Layout>
    );
};

export {TagsList};