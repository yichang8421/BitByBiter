import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../components/Imput";

const Wrapper = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    margin-left: 10px;
    font-size: 14px;
`;

type Props = {
    hidePad: () => void;
    value: string;
    onChange: (value: string) => void;
}

const NoteSection: React.FC<Props> = (props: Props) => {
    const note = props.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
    };
    return (
        <Wrapper>
            <Input label={"备注"} hidePad={props.hidePad} type={"text"} value={note} onChange={onChange}/>
        </Wrapper>
    );
};

export {NoteSection};