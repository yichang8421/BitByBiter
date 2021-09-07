import Layout from "../components/Layout";
import React, {useCallback, useState} from "react";
import {NoteSection} from "./component/NoteSection";
import {TagsSelection} from "./component/TagsSelection";
import CalculatorPad from "./component/CalculatorPad";
import RecordSelection from "./component/RecordSelection";
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
    // const hidePad = useCallback(() => {
    //     setDisplayCalculator(() => false);
    // }, []);

    return (
        <MyLayout>
            <RecordSelection
                displayCalPad={displayPad}
                output={"100"}
            />
            <NoteSection/>
            <TagsSelection/>
            {displayCalculator && <CalculatorPad/>}
            {/*<CalculatorPad/>*/}
        </MyLayout>
    );
}

export default Money;