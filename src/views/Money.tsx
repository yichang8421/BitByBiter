import Layout from "../components/Layout";
import React, {useCallback, useState} from "react";
import {NoteSection} from "./component/NoteSection";
import {TagsSelection} from "./component/TagsSelection";
import {CalculatorPad} from "./component/CalculatorPad";
import {RecordSelection} from "./component/RecordSelection";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";

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

    const defaultFormData = {
        tagIds: [] as number[],
        note: "",
        recordType: "-" as RecordType,
        amount: 0,
        createAt: new Date().toISOString()
    };

    const [selected, setSelected] = useState(defaultFormData);

    const [output, setOutput] = useState(selected.amount.toString());

    const {addRecord} = useRecords();

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected(() => {
            return {
                ...selected,
                ...obj
            };
        });
    };

    const onSubmit = () => {
        if (addRecord(selected as RecordItem)) {
            window.alert("保存成功");
            setSelected(() => defaultFormData);
            setOutput(() => "0");
        }
    };

    return (
        <MyLayout>
            {/*{JSON.stringify(selected)}*/}

            <RecordSelection
                displayCalPad={displayPad}
                output={output}
                value={selected.recordType}
                onChange={recordType => {
                    onChange({recordType});
                }}
            />
            <NoteSection
                label={"备注"}
                hidePad={hidePad}
                value={selected.note}
                onChange={note => {
                    onChange({note});
                }}
            />
            <NoteSection
                label={"日期"}
                hidePad={hidePad}
                type={"date"}
                value={selected.createAt}
                onChange={createAt => {
                    onChange({createAt});
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
                onSubmit={onSubmit}
            />}
            {/*<CalculatorPad/>*/}
        </MyLayout>
    );
}

export default Money;