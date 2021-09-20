import dayjs from "dayjs";

const beautifyDate = (string: string) => {
    const now = dayjs();
    const day = dayjs(string);

    const oneDay = 86400 * 1000;
    if (day.isSame(now, "day")) {
        return "今天";
    } else if (day.isSame(now.valueOf() - oneDay, "day")) {
        return "昨天";
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
        return "前天";
    } else if (day.isSame(now, "year")) {
        return day.format("M月D日");
    } else {
        return day.format("YYYY年M月D日");
    }
};

export {beautifyDate};