import React from "react";
import Icon from "../../components/Icon";
import {Wrapper} from "../../components/CalculatorOutput/CalculatorWrapper";
import {generateOutput} from "../../components/CalculatorOutput/GenerateOutput";

type Props = {
    hidePad: () => void,
    output: string,
    setOutput: React.Dispatch<React.SetStateAction<string>>
}

const CalculatorPad: React.FC<Props> = (Props: Props) => {
    const {output, setOutput} = Props;
    if (output.length === 0) {
        setOutput(() => "0");
    }

    const onCalculator = (e: React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent;
        if (!text) {
            return;
        }
        if ("0123456789.+-×÷%⇐=".split("").concat(["AC", "SAVE"]).indexOf(text) >= 0) {
            generateOutput({text, output, setOutput});
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
                onClick={onCalculator}
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