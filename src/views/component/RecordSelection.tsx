import styled from "styled-components";
import CalculatorOutput from "../../components/CalculatorOutput";
import {useCallback, useMemo, useState} from "react";

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
        
        >.selectDiv {
            display: block;
            padding: 6px 2px;
            font-weight: bolder;
            background: yellowgreen;
            border-radius: 20px;
            
            > .option{
                position: absolute;
                display: block;
                padding: 6px 2px;
                font-weight: bolder;
                border-radius: 20px;
                background: yellow;
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
                <div
                    className="selectDiv"
                    onClick={onToggle}
                >
                    <div className="selectDiv">
                        {recordType === "-" ? "支出" : "收入"}
                    </div>
                    {displayDiv && (
                        <div
                            className="option"
                            onClick={selectType}>
                            {recordType === "-" ? "收入" : "支出"}
                        </div>
                    )}
                </div>
            </div>
            <CalculatorOutput
                displayCalPad={Props.displayCalPad}
                output={Props.output}
            />
        </Wrapper>
    );
};

export {RecordSelection};