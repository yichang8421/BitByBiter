import {useState} from "react";

export const useRecords = () => {
    const [records, setRecords] = useState<RecrodItem[]>([]);

    const addRecord = (record: RecrodItem) => {
        setRecords(() => [
            ...records,
            record
        ]);
    };

    return {records, addRecord};
};