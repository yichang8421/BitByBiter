import Layout from "../components/Layout";
import React, {useCallback, useState} from "react";
import NoteSection from "./component/NoteSection";
import TagsSelection from "./component/TagsSelection";
import CalculatorPad from "./component/CalculatorPad";
import RecordSelection from "./component/RecordSelection";

function Money() {
    const [displayCalculator, setDisplayCalculator] = useState(false);
    const displayPad = useCallback(() => {
        setDisplayCalculator(() => true);
    }, []);
    const hidePad = useCallback(() => {
        setDisplayCalculator(() => false);
    }, []);

    return (
        <Layout>
            <RecordSelection
                displayCalPad={displayPad}
                output={"100"}
            />
            <NoteSection/>
            <TagsSelection/>
            {/*{displayCalculator && <CalculatorPad/>}*/}
            <CalculatorPad/>
        </Layout>
    );
}

export default Money;