import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
    background: #f5f5f5;
    padding: 0 16px;
    margin-left: 10px;
    font-size: 14px;
    > label{
        display: flex;
        align-items: center;
        > span{
            margin-right: 16px;
            white-space: nowrap;
        }
        > input{
            display: block;
            width: 100%;
            height: 48px;
            background: none;
            border:none;
        }
    }
`;

const NoteSection: React.FC = () => {
    const [note, setNote] = useState("");
    const refInput = useRef<HTMLInputElement>(null);
    const currentInput = refInput.current;
    const onBlur = () => {
        if (currentInput) {
            setNote(() =>
                currentInput.value
            );
        }
    };
    return (
        <Wrapper>
            <label>
                <span>备注</span>
                <input
                    type="text"
                    placeholder="此处添加备注"
                    defaultValue={note}
                    ref={refInput}
                    onBlur={onBlur}
                />
            </label>
        </Wrapper>
    );
};

export {NoteSection};