import React from "react";
import Layout from "components/Layout";
import {useTags} from "useTags";
import {Link, useParams, useHistory} from "react-router-dom";
import Icon from "components/Icon";
import {Button} from "components/MyButton";
import styled from "styled-components";
import {Input} from "components/Imput";
import {ElementCenter} from "components/CalculatorOutput/ElementCenter";
import {Space} from "components/CalculatorOutput/Space";

type Params = {
    idString: string
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
    a{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const InputWrapper = styled.div`
    background: white;
    margin-top: 16px;
    padding:0 16px;
`;

const EditTag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {idString} = useParams<Params>();

    const tag = findTag(Number(idString));

    const history = useHistory();
    const onClickBack = () => {
        // window.history.back();
        history.goBack();
    };

    const tagContent = (tag: { id: number; name: string }) => (
        <div>
            <InputWrapper>
                <Input
                    label={"标签名"}
                    type={"text"}
                    placeholder={"标签名"}
                    value={tag.name}
                    onChange={(e) => {
                        updateTag(tag.id, {name: e.target.value});
                    }}
                />
            </InputWrapper>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <Space/>
            <ElementCenter>
                <Button onClick={() => {
                    deleteTag(tag.id);
                    onClickBack();
                }}>删除标签</Button>
            </ElementCenter>
        </div>);

    return (
        <Layout>
            <Topbar>
                <Link to={"/edit/"}>
                    <Icon name={"left"}/>
                </Link>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {tag && tagContent(tag)}
        </Layout>
    );
};

export {EditTag};