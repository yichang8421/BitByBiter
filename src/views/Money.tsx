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
        tagIds: [] as number[],
        note: "",
        recordType: "-" as RecordType,
        amount: 0
    });

    // type Selected = typeof selected

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected(() => {
            return {
                ...selected,
                ...obj
            };
        });
    };

    const [output, setOutput] = useState(selected.amount.toString());

    return (
        <MyLayout>
            {selected.tagIds.join(",")}
            <hr/>
            {selected.note}
            <hr/>
            {selected.amount}

            <RecordSelection
                displayCalPad={displayPad}
                output={output}
                value={selected.recordType}
                onChange={recordType => {
                    onChange({recordType});
                }}
            />
            <NoteSection
                hidePad={hidePad}
                value={selected.note}
                onChange={note => {
                    onChange({note});
                }}
            />
            <TagsSelection
                hidePad={hidePad}
                value={selected.tagIds}
                onChange={tagIds => {
                    onChange({tagIds});
                }}
            />
            {displayCalculator &&
            <CalculatorPad
                hidePad={hidePad}
                output={output}
                // value={selected.amount}
                onOutputChange={output => {
                    setOutput(() => output);
                }}
                onAmountChange={amount => {
                    onChange({amount});
                }}
            />}
            {/*<CalculatorPad/>*/}
        </MyLayout>
    );
}

export default Money;