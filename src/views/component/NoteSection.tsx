import styled from "styled-components";
import React, {ChangeEventHandler} from "react";
import {Input} from "../../components/Imput";
import dayjs from "dayjs";

const Wrapper = styled.section`
    background: #f5f5f5;
    padding: 6px 16px;
    margin-left: 10px;
    font-size: 14px;
    text-align: center;
`;

type Props = {
    hidePad?: () => void;
    value: string;
    onChange: (value: string) => void;
    label: string;
    type?: string;
}

const NoteSection: React.FC<Props> = (props: Props) => {
    const {value, label, type} = props;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value);
    };

    const formatDate = (isoString: string) => {
        return dayjs(isoString).format("YYYY-MM-DD");
    };

    if (type === "date") {
        return (
            <Wrapper>
                <Input
                    label={label}
                    type={type || "text"}
                    value={formatDate(value)}
                    onChange={onChange}/>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Input
                    label={label}
                    hidePad={props.hidePad}
                    type={type || "text"}
                    placeholder={"此处添加备注"}
                    value={value}
                    onChange={onChange}/>
            </Wrapper>
        );
    }
};

export {NoteSection};