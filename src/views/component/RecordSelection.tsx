import styled from "styled-components";
import CalculatorOutput from "../../components/CalculatorOutput";
import React, {useCallback, useMemo, useState} from "react";
import Icon from "../../components/Icon";

const Wrapper = styled.section`
    //border:1px solid red;
    padding: 22px 6px;
    padding-left: 26px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    > .type{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: left;
        
        > span{
            //margin-right: 8px;
            white-space: nowrap;
            font-weight: bolder;
        }
        
        >.selectBtn {
            display: flex;
            width: 64px;
            position: relative;
            align-items: center;
            justify-content: center;
            padding: 6px 2px;
            font-weight: bolder;
            border: none;
            &:active {
                box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
            }
            background: yellowgreen;
            border-radius: 10px;
            
            > .option{
                position: absolute;
                top: 32px;
                left: 0;
                height: 100%;
                width: 100%;
                display: block;
                text-align: center;
                padding: 6px 2px;
                font-weight: bolder;
                border-radius: 10px;
                background: #e7f2ff;
                &:hover{
                    background: #feb940;
                }
                &:active {
                    box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
                }
            }
        }
    }
    > .output{
        display: block;
        width: 100%;
        background: white;
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgb(0 0 0 / 15%);
        margin-left: 16px;
        margin-right: 16px;
        font-size: 28px;
        font-family: Consolas monospace;
        padding: 9px 8px;
        text-align: right;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;    
    }
`;

type Props = {
    displayCalPad: () => void,
    output: string
}

const RecordSelection: React.FC<Props> = (Props: Props) => {
    const [recordType, setRecordType] = useState("-");
    const [displayDiv, setDisplayDiv] = useState(false);

    const onToggle = useCallback(() => {
        setDisplayDiv(() => !displayDiv);
    }, [displayDiv]);

    const selectType = useMemo(() => {
        return () => {
            setRecordType(() => {
                return recordType === "-" ? "+" : "-";
            });
        };
    }, [recordType]);

    return (
        <Wrapper>
            <div className="type">
                    <span>
                        收支类型
                    </span>
                <button
                    className="selectBtn"
                    onClick={onToggle}
                >
                    <div>
                        {recordType === "-" ? "支出" : "收入"}
                    </div>
                    <Icon name={"down"}/>
                    {displayDiv && (
                        <div
                            className="option"
                            onClick={selectType}>
                            {recordType === "-" ? "收入" : "支出"}
                        </div>
                    )}
                </button>
            </div>
            <CalculatorOutput
                displayCalPad={Props.displayCalPad}
                output={Props.output}
            />
        </Wrapper>
    );
};

export {RecordSelection};