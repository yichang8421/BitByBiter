import {useRecords} from "./useRecords";
import dayjs from "dayjs";
import _ from "lodash";

const useChartArray = () => {
    const {records} = useRecords();
    const today = new Date();
    const keyValueList: { key: string; value: number; }[] = [];

    for (let i = 0; i <= 29; i++) {
        const dateString =
            dayjs(today)
                .subtract(i, "day")
                .format("YYYY-MM-DD");
        const foundRecord =
            _.find(records, {
                createAt: dateString
            });

        keyValueList.push({
            key: dateString,
            value: foundRecord ? foundRecord.amount : 0
        });

        keyValueList.sort((a, b) => {
            if (a.key > b.key) return 1;
            else if (a.key < b.key) return -1;
            else return 0;
        });
    }

    return {keyValueList};
};

export {useChartArray};