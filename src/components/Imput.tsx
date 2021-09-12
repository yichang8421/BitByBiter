import React from "react";
import styled from "styled-components";

const Label = styled.label`
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
`;

type Props = {
    label: string;
    hidePad: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
    const {label, hidePad, ...rest} = props;
    return (
        <Label onClick={props.hidePad}>
            <span>props.label</span>
            <input
                type={props.type}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue}
                // ref={refInput}
                onBlur={props.onBlur}
            />
        </Label>
    );
};

export {Input};