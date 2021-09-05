import React from "react";
import styled from "styled-components";

const CalPadWrapper = styled.section`
    display: flex;
    flex-direction: column;
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

const CalculatorPad = () => {
    return (
        <CalPadWrapper>
        {/*<div className="result">100</div>*/}
        <div className="pad clearfix">
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
    </CalPadWrapper>);
};

export default CalculatorPad;