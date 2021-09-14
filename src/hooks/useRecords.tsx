import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);

    useEffect(() => {
        setRecords(() => JSON.parse(window.localStorage.getItem("records") || "[]"));
    }, []);

    useUpdate(() => {
        window.localStorage.setItem("records", JSON.stringify(records));
    }, [records]);


    const addRecord = (newRecord: newRecordItem) => {
        if (!newRecord.tagIds.length) {
            alert("至少要选择一个标签哦");
            return false;
        } else {
            const record = {...newRecord, createAt: (new Date().toISOString())};
            setRecords(() => [
                ...records,
                record
            ]);
            return true;
        }
    };

    return {records, addRecord};
};