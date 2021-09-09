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

    type RecordType = "-" | "=";

    const [selected, setSelected] = useState({
        tags: [] as string[],
        note: "",
        recordType: "-" as RecordType,
        amount: 0
    });

    const [output, setOutput] = useState("0");

    return (
        <MyLayout>
            <RecordSelection
                displayCalPad={displayPad}
                output={output}
            />
            <NoteSection
                hidePad={hidePad}
            />
            <TagsSelection
                hidePad={hidePad}
            />
            {displayCalculator &&
            <CalculatorPad
                hidePad={hidePad}
                output={output}
                setOutput={setOutput}
            />}
            {/*<CalculatorPad/>*/}
        </MyLayout>
    );
}

export default Money;