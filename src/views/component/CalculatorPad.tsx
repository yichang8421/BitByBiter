import React from "react";
import Icon from "../../components/Icon";
import {Wrapper} from "../../components/CalculatorOutput/CalculatorWrapper";

type Props = {
    hidePad: () => void,
    output: string,
    setOutput: React.Dispatch<React.SetStateAction<string>>
}

let isDecimalAdded = false;
let isOperatorAdded = false;

const CalculatorPad: React.FC<Props> = (Props: Props) => {
    const {output, setOutput} = Props;
    if (output.length === 0) {
        setOutput(() => "0");
    }

    const isOperator = (string: string) => {
        return ["+", "-", "×", "÷"].indexOf(string) > -1;
    };

    const endWidthDecimal = (string: string) => {
        return string.charAt(string.length - 1) === ".";
    };
    const endWidthOperator = (string: string) => {
        return isOperator(string.charAt(output.length - 1));
    };

    const onCalculator = (e: React.MouseEvent) => {
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
                if (output === "0") {
                    setOutput(() => text);
                } else {
                    setOutput(() => output + text);
                }
                isOperatorAdded = false;
                break;
            case ".":
                if (!isDecimalAdded) {
                    setOutput(() => output + text);
                    isDecimalAdded = true;
                    isOperatorAdded = true;
                }
                break;
            case "+":
            case "-":
            case "×":
            case "÷":
                if (!isOperatorAdded) {
                    if (endWidthOperator(output)) {
                        setOutput(() => output + "0" + text);
                    } else {
                        setOutput(() => output + text);
                    }
                    isDecimalAdded = false;
                    isOperatorAdded = true;
                }
                break;
            case "%":
                setOutput(() => {return (Number(output) / 100).toString();});
                const _output = (Number(output) * 0.01).toString();
                if (_output.indexOf(".") !== -1) {
                    isDecimalAdded = true;
                    console.log(isDecimalAdded);
                }
                break;
            case "⇐":
                if (output.length === 1) {
                    console.log(output);
                    isOperatorAdded = false;
                    isDecimalAdded = false;
                    setOutput(() => "");
                } else {
                    setOutput(() => output.slice(0, -1) || "");

                    console.log(output);
                    if (endWidthOperator(output)) {
                        console.log("operator");
                        isOperatorAdded = false;
                        isDecimalAdded = true;
                    }
                    if (endWidthDecimal(output)) {
                        console.log("decimal");
                        isDecimalAdded = false;
                    }
                }
                break;
            case "AC":
                setOutput(() => "");
                isOperatorAdded = false;
                isDecimalAdded = false;
                break;
            case "=":
                let result = output
                    .replace(new RegExp(/×/g), "*")
                    .replace(new RegExp(/÷/g), "/");

                // if(endWidthDecimal(result)||endWidthOperator(result))
                if (result.match(/(\D+)$/g)) {
                    result += "0";
                }

                setOutput(() => {
                    return Number(eval(result)
                        .toFixed(9))
                        .toString();
                });

                isOperatorAdded = false;
                isDecimalAdded = false;

                const _result = Number(eval(result)
                    .toFixed(9))
                    .toString();
                if (_result.indexOf(".") !== -1) {
                    isDecimalAdded = true;
                }
                break;
            case "SAVE":
                console.log("SAVE");
                break;
            default:
                setOutput(() => "");
                isOperatorAdded = false;
                isDecimalAdded = false;
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