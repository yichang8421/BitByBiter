import React from "react";
import Layout from "components/Layout";
import {useTags} from "useTags";
import {useParams} from "react-router-dom";
import Icon from "components/Icon";
import {Button} from "components/MyButton";
import styled from "styled-components";
import {Input} from "../../../components/Imput";
import {ElementCenter} from "../../../components/CalculatorOutput/ElementCenter";
import {Space} from "../../../components/CalculatorOutput/Space";

type Params = {
    id: string
}

const Topbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #2a9e78;
    font-weight: bolder;
    background: white;
    padding: 0 16px;
    line-height: 40px;
`;

const InputWrapper = styled.div`
    background: white;
    margin-top: 16px;
    padding:0 16px;
`;

const EditTag: React.FC = () => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();

    const tag = findTag(Number(id));
    return (
        <Layout>
            <Topbar>
                <Icon name={"left"}/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <InputWrapper>
                <Input
                    label={"编辑"}
                    type={"text"}
                    placeholder={"标签名"}
                />
            </InputWrapper>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <ElementCenter>
                <Button>删除标签</Button>
            </ElementCenter>
        </Layout>
    );
};

export {EditTag};