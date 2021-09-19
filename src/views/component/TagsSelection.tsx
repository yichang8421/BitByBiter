/*eslint-disable no-useless-computed-key */

import styled from "styled-components";
import Icon from "../../components/Icon";
import React, {ChangeEventHandler, useState} from "react";
import img from "../../img/记账vue版.jpg";
import {NavLink} from "react-router-dom";
import {useTags} from "hooks/useTags";
import {Input} from "../../components/Imput";

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

const ElemCenter = styled.div`
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
    
    &.visibility-false {
        display: none;
    }
`;

const MyPrompt = styled.div`
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5));
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: solid 1px #c4c3c3;
    border-radius: 15px;
    backdrop-filter: blur(2px);
    text-align: center;
    
    h3{
        margin-top: 8px;
        margin-bottom: 16px;
    }
    
    Label{
        padding: 0 34px;
    }
    
    > div{
        display: flex;
        width: 100%;
        padding: 16px 48px;
        justify-content: space-around;
            >button{
              padding: 4px 8px;
              font-weight: bolder;
              &:active {
                    box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
                }
                background: yellowgreen;
                border-radius: 5px;
            }
    }
`;

type VisibleProps = {
    isOpen: boolean;
} & React.AllHTMLAttributes<any>

function DisplayPrompt(props: VisibleProps) {
    return (
        <ElemCenter className={`visibility-${props.isOpen} `}>
            {props.children}
        </ElemCenter>
    );
}

type myPromptProps = {
    // hidePad: () => void;
    newTag: string;
    setNewTag: (value: string) => void;
    addTag: (string: string) => boolean;
}


function OhMyPrompt(props: myPromptProps) {
    const [display, setDisplay] = React.useState(false);
    const {newTag, setNewTag} = props;
    const {addTag} = props;

    const onAddtag: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTag(e.target.value);
    };

    const submitAddTag = () => {
        addTag(newTag);
        setNewTag("");
    };

    function openMyPrompt() {
        setDisplay(true);
    }

    function closeMyPrompt() {
        setDisplay(false);
    }

    return (
        <>
            <Button
                onClick={openMyPrompt}
            >
                <Icon name={"add"}/>
                添加
            </Button>
            <DisplayPrompt isOpen={display}>
                <MyPrompt>
                    <h3>添加标签</h3>
                    <Input
                        label={"标签名"}
                        type={"text"}
                        placeholder={"此处添加新的标签名"}
                        value={newTag}
                        onChange={onAddtag}/>
                    <div>
                        <button
                            onClick={() => {
                                closeMyPrompt();
                                submitAddTag();
                            }}
                        >
                            提交
                        </button>
                        <button
                            onClick={closeMyPrompt}
                        >
                            取消
                        </button>
                    </div>
                </MyPrompt>
            </DisplayPrompt>
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
                <OhMyPrompt
                    newTag={newTag}
                    setNewTag={setNewTag}
                    addTag={addTag}
                />
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