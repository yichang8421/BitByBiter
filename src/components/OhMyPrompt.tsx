import styled from "styled-components";
import React, {ChangeEventHandler, forwardRef, useImperativeHandle} from "react";
import Icon from "./Icon";
import {Input} from "./Imput";

const Button = styled.button`
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
    hidePad: () => void;
    newTag: string;
    setNewTag: (value: string) => void;
    addTag: (string: string) => boolean;
    onRef: any;
}


function OhMyPrompt(props: myPromptProps) {
    const [display, setDisplay] = React.useState(false);
    const {newTag, setNewTag} = props;
    const {addTag, hidePad} = props;
    const {onRef} = props;
    useImperativeHandle(onRef, () => ({
        // onChild 就是暴露给父组件的方法
        openMyPrompt: () => {
            setDisplay(true);
        }
    }));

    const onAddtag: ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTag(e.target.value);
    };

    const submitAddTag = () => {
        addTag(newTag);
        setNewTag("");
    };

    // function openMyPrompt() {
    //     setDisplay(true);
    // }

    function closeMyPrompt() {
        setDisplay(false);
    }


    return (
        <>
            {/*<Button*/}
            {/*    onClick={() => {*/}
            {/*        openMyPrompt();*/}
            {/*        hidePad();*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Icon name={"add"}/>*/}
            {/*    添加*/}
            {/*</Button>*/}
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

export {OhMyPrompt};