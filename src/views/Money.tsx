import Layout from "../components/Layout";
import React, {useCallback, useState} from "react";
import {NoteSection} from "./component/NoteSection";
import {TagsSelection} from "./component/TagsSelection";
import {CalculatorPad} from "./component/CalculatorPad";
import {RecordSelection} from "./component/RecordSelection";
import styled from "styled-components";

const MyLayout = styled(Layout)`
    //border:1px solid blue;
    display: flex;
    flex-direction: column;
`;

function Money() {
    const [displayCalculator, setDisplayCalculator] = useState(false);
    const displayPad = useCallback(() => {
        setDisplayCalculator(() => true);
    }, []);
    const hidePad = useCallback(() => {
        setDisplayCalculator(() => false);
    }, []);

    type RecordType = "-" | "+";

    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: "",
        recordType: "-" as RecordType,
        amount: 0
    });

    const [output, setOutput] = useState(selected.amount.toString());

    return (
        <MyLayout>
            {selected.tags.join(",")}
            <hr/>
            {selected.note}
            <hr/>
            {selected.amount}

            <RecordSelection
                displayCalPad={displayPad}
                output={output}
                value={selected.recordType}
                onChange={(recordType) => {
                    setSelected(() => {
                        return {
                            ...selected,
                            recordType: recordType
                        };
                    });
                }}
            />
            <NoteSection
                hidePad={hidePad}
                value={selected.note}
                onChange={(note) => {
                    setSelected(() => {
                        return {
                            ...selected,
                            note: note
                        };
                    });
                }}
            />
            <TagsSelection
                hidePad={hidePad}
                value={selected.tags}
                onChange={(tags) => setSelected(() => {
                    return {
                        ...selected,
                        tags: tags
                    };
                })}
            />
            {displayCalculator &&
            <CalculatorPad
                hidePad={hidePad}
                output={output}
                // value={selected.amount}
                onOutputChange={(output: string) => {
                    setOutput(() => output);
                }}
                onAmountChange={(amount) => {
                    setSelected(() => {
                        return {
                            ...selected,
                            amount: amount
                        };
                    });
                }}
            />}
            {/*<CalculatorPad/>*/}
        </MyLayout>
    );
}

export default Money;