import {useRecords} from "./useRecords";
import dayjs from "dayjs";
import _ from "lodash";

const useChartArray = () => {
    const {records} = useRecords();
    const today = new Date();
    const array: { date: string; value: number; }[] = [];

    for (let i = 0; i <= 29; i++) {
        const dateString =
            dayjs(today)
                .subtract(i, "day")
                .format("YYYY-MM-DD");
        const foundRecord =
            _.find(records, {
                createAt: dateString
            });

        array.push({
            date: dateString,
            value: foundRecord ? foundRecord.amount : 0
        });
    }

    return {array};
};

export {useChartArray};