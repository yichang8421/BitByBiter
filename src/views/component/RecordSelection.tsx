import styled from "styled-components";

const RecordSelectionWrapper = styled.section`
    border:1px solid red;
    padding: 22px 6px;
    padding-left: 26px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    > label{
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
            > select{
                display: block;
                padding: 6px 2px;
                            border:1px solid red;
                font-weight: bolder;
                background: yellowgreen;
                //border:none;
                border-radius: 20px;
                >option{
                  background: yellow;
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

const CalculatorOutput = (Props: {displayNumberPad:()=>void,output:string})=>{
    return (
        <div className="output" onClick={()=> {
            Props.displayNumberPad();
            console.log("hello");
        }}>
            {Props.output}
        </div>
    );
}


const RecordSelection = (Props: {displayNumberPad:()=>void,output:string})=>{
    return(
        <RecordSelectionWrapper>
            <label>
                    <span>
                        收支类型
                    </span>
                <div className="selectDiv"><select
                    name="types"
                    id="types"
                >
                    <option value="1">收入</option>
                    <option value="2">支出</option>
                </select></div>
            </label>
            <CalculatorOutput
                displayNumberPad = {Props.displayNumberPad}
                output = {Props.output}
            />
        </RecordSelectionWrapper>
    );
};

export default RecordSelection;