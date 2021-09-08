import React, {useState} from "react";
import styled from "styled-components";
import Icon from "../../components/Icon";

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    >.hiddenPad {
        border: none;
        width: 100%;
        height: 24px;
        
        &:active {
            box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
        }
    }
    
    > .pad { 
    //border:1px solid red;
        >button{
            margin-bottom:0;
            background: #f4faff;
            font-weight: bolder;
            font-size: 20px;
            width: 20%;
            height: 64px;
            float: left;
            //background: transparent;
            border: none;
            display: block;
        //&:nth-child(1) {
        //    background: $bg;
        //}
        //&:nth-child(2), &:nth-child(6) {
        //    background: darken($bg, 4%);
        //}
        //&:nth-child(3), &:nth-child(7), &:nth-child(11) {
        //    background: darken($bg, 4%*2);
        //}
        //&:nth-child(4), &:nth-child(8), &:nth-child(12), &:nth-child(16) {
        //    background: darken($bg, 4%*3);
        //}
        //&:nth-child(5), &:nth-child(9), &:nth-child(13), &:nth-child(17) {
        //    background: darken($bg, 4%*4);
        //}
        //&:nth-child(10), &:nth-child(14), &:nth-child(18) {
        //    background: darken($bg, 4%*5);
        //}
        //&:nth-child(15) {
        //    background: $selected;
        //}
        //&:nth-child(19) {
        //    background: darken($bg, 4%*6);
        //}
        //&:nth-child(20) {
        //    background: darken($bg, 4%*7);
        //}
        
            &:active {
                box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
                color:#00aeff;
            }
        }
    }
`;

type Props = {
    hidePad: () => void,
    output: string,
    setOutput: React.Dispatch<React.SetStateAction<string>>
}

const CalculatorPad: React.FC<Props> = (Props: Props) => {
    const {output, setOutput} = Props;

    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) {
            return;
        }
        switch (text) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case ".":
                if (output === "0") {
                    setOutput(text);
                } else {
                    setOutput(output + text);
                }
                break;
            case "AC":
                console.log("AC");
                break;
            case "SAVE":
                console.log("SAVE");
                break;
            case "+":
                console.log("+");
                break;
            case "-":
                console.log("-");
                break;
            case "×":
                console.log("×");
                break;
            case "÷":
                console.log("÷");
                break;
            case "%":
                console.log("%");
                break;
            case "⇐":
                console.log("⇐");
                break;
            case "=":
                console.log("=");
                break;
        }
    };

    return (
        <Wrapper>
            {/*<div className="result">100</div>*/}
            <button className="hiddenPad" onClick={Props.hidePad}>
                <Icon name={"down"}/>
            </button>
            <div
                className="pad clearfix"
                onClick={onClickButtonWrapper}
            >
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>⇐</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>AC</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>×</button>
                <button>SAVE</button>
                <button>%</button>
                <button>0</button>
                <button>.</button>
                <button>÷</button>
                <button>=</button>
            </div>
        </Wrapper>);
};

export {CalculatorPad};