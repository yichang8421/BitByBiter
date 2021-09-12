import styled from "styled-components";
import React, {useRef} from "react";
import {Input} from "../../components/Imput";

const Wrapper = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    margin-left: 10px;
    font-size: 14px;
    //> label{
    //    display: flex;
    //    align-items: center;
    //    > span{
    //        margin-right: 16px;
    //        white-space: nowrap;
    //    }
    //    > input{
    //        display: block;
    //        width: 100%;
    //        height: 48px;
    //        background: none;
    //        border:none;
    //    }
    //}
`;

type Props = {
    hidePad: () => void;
    value: string;
    onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props: Props) => {
    const note = props.value;
    const refInput = useRef<HTMLInputElement>(null);
    const currentInput = refInput.current;
    const onBlur = () => {
        if (currentInput) {
            props.onChange(currentInput.value);
        }
    };
    return (
        <Wrapper>
            {/*<label onClick={props.hidePad}>*/}
            {/*    <span>备注</span>*/}
            {/*    <input*/}
            {/*        type="text"*/}
            {/*        placeholder="此处添加备注"*/}
            {/*        defaultValue={note}*/}
            {/*        ref={refInput}*/}
            {/*        onBlur={onBlur}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*<Input />*/}
        </Wrapper>
    );
};

export {NoteSection};