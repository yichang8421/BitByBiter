import React from "react";
import styled from "styled-components";

const CalculatorPadSelectionWrapper = styled.section``;

const CalculatorPad = () => {
    return (<CalculatorPadSelectionWrapper>
        {/*<div className="result">100</div>*/}
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>AC</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
            <button>保存</button>
            <button>%</button>
            <button>0</button>
            <button>.</button>
            <button>÷</button>
            <button>=</button>
        </div>
    </CalculatorPadSelectionWrapper>);
};

export default CalculatorPad;