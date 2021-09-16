import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.section`
    font-size: 20px;
    font-weight: bolder;
    >ul{
        display: flex;
        >li{
            width: 50%;
            text-align: center;
            padding: 16px 0;
            position:relative;
            &.selected{
                background: #e7f2ff;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
                &::after{
                    content: "";
                    display: block;
                    height: 3px;
                    background: #9acd32;
                    position:absolute;
                    bottom: 0;
                    width: 100%;
                    left: 0;
                }
            }
        }
    }
`;

type Props = {
    value: RecordType;
    onChange: (value: RecordType) => void;
}

const TypeSelection: React.FC<Props> = (props: Props) => {
    const typeMap = {
        "-": "支出",
        "+": "收入"
    };
    const [typeList] = useState<RecordType[]>(["-", "+"]);
    const type = props.value;

    return (
        <Wrapper>
            <ul>{
                typeList.map(c =>
                    <li
                        key={c}
                        className={type === c ? "selected" : ""}
                        onClick={() => {
                            props.onChange(c);
                        }}
                    >{typeMap[c]}</li>
                )
            }</ul>
        </Wrapper>
    );
};

export {TypeSelection};