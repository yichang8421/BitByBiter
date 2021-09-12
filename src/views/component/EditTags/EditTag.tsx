import React from "react";
import Layout from "components/Layout";
import {useTags} from "useTags";
import {useParams} from "react-router-dom";
import Icon from "components/Icon";
import {Button} from "components/MyButton";
import styled from "styled-components";

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
            <div>
                <label>
                    <span>备注</span>
                    <input
                        type="text"
                        placeholder="标签名"
                    />
                </label>
            </div>
            <Button>删除标签</Button>
        </Layout>
    );
};

export {EditTag};