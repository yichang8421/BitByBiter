/*eslint-disable no-useless-computed-key */

import styled from "styled-components";
import Icon from "../../components/Icon";
import React, {ChangeEventHandler, useDebugValue, useEffect, useState} from "react";
import img from "../../img/记账vue版.jpg";
import {NavLink} from "react-router-dom";
import {useTags} from "hooks/useTags";
import {Input} from "../../components/Imput";
import {createId} from "../../lib/createId";

const Wrapper = styled.section`
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
            background: #ffba40;
            //border:1px solid red;
            box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
            border-radius: 20px;
          }
            
            text-align: center;
            display: flex;
            //flex-direction: column;
            //justify-content: center;
            align-items: center;
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

const Button = styled.button`
    //border:none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
    background: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    font-family: inherit;
    font-size: 14px;
    font-weight: bolder;
    margin: 8px 8px;
    margin-left: 30px;
    margin-right: 20px;
    padding: 2px 4px;
`;

type Props = {
    hidePad: () => void;
    value: number[];
    onChange: (selected: number[]) => void;
}

const mapNameToIcon: Record<string, string> = {
    ["衣服"]: "cloth",
    ["吃饭"]: "eat",
    ["住房"]: "dwell",
    ["出行"]: "travel"
};

const ModalWrapper = styled.div`
.center {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.5)
    );
    backdrop-filter: blur(2px);
}

.modal-content {
  background: linear-gradient(
    to top right,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.5)
  );
  width: 350px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: solid 1px #bbb;
  border-radius: 15px;
  backdrop-filter(blur(2px))
  text-align: center;
}

p {
  text-align: center;
  word-break: break-word;
  color: #111;
  font-size: 20px;
  margin-bottom: 15px;
}

.visibility-false {
  display: none;
}

.close-button {
  background-color: red;
}
`;

type ModalProps = {
    isOpen: boolean;
} & React.AllHTMLAttributes<any>

function Modal(modelProps: ModalProps) {
    return (
        <div className={`visibility-${modelProps.isOpen} center`}>
            {modelProps.children}
        </div>
    );
}

type myPromptProps = {
    // hidePad: () => void;
    newTag: string;
    setNewTag: (value: string) => void;
}


function ModalPopup(props: myPromptProps) {
    const [modalVisibility, setModalVisibility] = React.useState(false);
    const {newTag, setNewTag} = props;
    const {addTag} = useTags();

    console.log(newTag);
    const onAddtag: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTag(e.target.value);
    };

    const submitAddTag = () => {
        if (addTag(newTag))
            setNewTag("");
    };

    function OpenModal() {
        setModalVisibility(true);
    }

    function CloseModal() {
        setModalVisibility(false);
    }

    return (
        <>
            <Button
                onClick={OpenModal}
            >
                <Icon name={"add"}/>
                添加
            </Button>
            <Modal isOpen={modalVisibility}>
                <div className={"modal-content"}>
                    <h1>添加标签</h1>
                    <Input
                        label={"备注"}
                        type={"text"}
                        placeholder={"此处添加备注"}
                        value={newTag}
                        onChange={onAddtag}/>
                    <button
                        onClick={() => {
                            CloseModal();
                            submitAddTag();
                        }}
                        className={"button close-button"}
                    >
                        提交
                    </button>
                    <button
                        onClick={CloseModal}
                        className={"button close-button"}
                    >
                        取消
                    </button>
                </div>
            </Modal>
        </>
    );
}

const TagsSelection: React.FC<Props> = (props: Props) => {
    const {tags, addTag} = useTags();
    const selectedTagIds = props.value;
    const [newTag, setNewTag] = useState("");

    function onToggleTag(tagId: number) {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t !== tagId));
        } else {
            props.onChange([
                ...selectedTagIds,
                tagId
            ]);
        }
    }

    const getClass = (tagId: number) =>
        selectedTagIds.indexOf(tagId) >= 0 ?
            "selected" :
            "";

    return (
        <Wrapper>
            <ol>
                <NavLink to={"/edit"} activeClassName="selected">
                    <Button
                        onClick={() => {
                            props.hidePad();
                        }}
                    >
                        <Icon name={"edit"}/>
                        编辑
                    </Button>
                </NavLink>
                <ModalWrapper>
                    <ModalPopup
                        newTag={newTag}
                        setNewTag={setNewTag}
                    />
                </ModalWrapper>
                {/*<Button*/}
                {/*    onClick={() => {*/}
                {/*        props.hidePad();*/}
                {/*        addTag();*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Icon name={"add"}/>*/}
                {/*    添加*/}
                {/*</Button>*/}
                {
                    tags.map(tag => {
                        const mapIcon = mapNameToIcon[tag.name];
                        return (<li
                            key={tag.id}
                            onClick={() =>
                                onToggleTag(tag.id)
                            }
                            className={
                                [
                                    getClass(tag.id),
                                    mapIcon ? mapIcon : "others"
                                ].join(" ")
                            }
                        >
                            <Icon name={mapIcon ? mapIcon : "others"}/>
                            <span>{tag.name}</span>
                        </li>);
                    })
                }
            </ol>
        </Wrapper>
    );
};

export {TagsSelection};