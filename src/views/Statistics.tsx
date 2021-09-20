import Layout from "../components/Layout";
import React, {useEffect, useRef, useState} from "react";
import {TypeSelection} from "../components/TypeSelection";
import {MyEcharts} from "../components/MyEcharts";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import dayjs from "dayjs";
import _ from "lodash";

const ChartsWrapper = styled.div`
    //width:500%;
    overflow: auto;
    @media (max-width: 500px) {
        &::-webkit-scrollbar{
            display: none;
        }
    } 
`;

function Statistics() {
    const [type, setType] = useState<RecordType>("-");
    const container = useRef(null);

    const {records} = useRecords();
    const hash: { [key: string]: RecordItem[] } = {};

    const selectedRecords = () => {
        return records.filter(r => r.recordType === type);
    };

    selectedRecords().map(r => {
        const key = dayjs(r.createAt).format("YYYY-MM-DD");
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });

    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });

    const result = array.map(([date, record]) => {
        const total = record.reduce(
            (sum, item) => {
                return sum + item.amount;
            }, 0);

        const type = record.map(r => {
            return r.recordType;
        });

        return {date, total, type: type[0]};
    });

    const today = new Date();
    const arr: { date: string; value: number; }[] = [];

    for (let i = 0; i <= 29; i++) {
        const dateString =
            dayjs(today)
                .subtract(i, "day")
                .format("YYYY-MM-DD");
        const foundRecord =
            _.find(result, {
                date: dateString
            });

        arr.push({
            date: dateString,
            value: foundRecord ? foundRecord.total : 0
        });
    }

    arr.sort((a, b) => dayjs(a.date).valueOf() - dayjs(b.date).valueOf());
    const key = arr.map(item => item.date);
    const value = arr.map(item => item.value);

    useEffect(() => {
        // @ts-ignore
        container.current.scrollLeft = container.current.scrollWidth;
    }, []);

    const option = {
        grid: {top: 128, right: 8, left: 8},
        xAxis: {
            type: "category",
            data: key,
            axisTick: {alignWithLabel: true},
            axisLabel: {
                formatter: function (value: string) {
                    return value.substr(5);
                }
            }
        },
        yAxis: {
            type: "value",
            show: false
        },
        series: [
            {
                symbol: "circle",
                itemStyle: {borderWidth: 0.8, color: "#ff8000", borderColor: "#e7f2ff"},
                symbolSize: 8,
                data: value,
                type: "line",
                smooth: true,
            },
        ],
        tooltip: {
            // triggerOn: "click",
            trigger: "axis",
            position: "top"
        },
    };

    return (
        <Layout>
            <TypeSelection
                value={type}
                onChange={value => setType(() => value)}
            />
            <ChartsWrapper ref={container}>
                <MyEcharts option={option}/>
            </ChartsWrapper>
        </Layout>
    );
}

export default Statistics;