import Layout from "../components/Layout";
import React, {useEffect, useRef, useState} from "react";
import {TypeSelection} from "../components/TypeSelection";
import {MyEcharts} from "../components/MyEcharts";
import styled from "styled-components";
import {useChartArray} from "../hooks/useChartArray";

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
    const {array} = useChartArray();
    const keys = array.map(item => item.date);
    const value = array.map(item => item.value);

    useEffect(() => {
        // @ts-ignore
        container.current.scrollLeft = container.current.scrollWidth;
    }, []);

    const option = {
        grid: {top: 128, right: 8, left: 8},
        xAxis: {
            type: "category",
            data: keys,
            axisTick: {alignWithLabel: true}
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
            // position: "top"
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