import Layout from "../components/Layout";
import React, {useEffect, useRef, useState} from "react";
import {TypeSelection} from "../components/TypeSelection";
import {MyEcharts} from "../components/MyEcharts";
import styled from "styled-components";

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

    useEffect(() => {
        console.log(container.current);
        // @ts-ignore
        container.current.scrollLeft = container.current.scrollWidth;
    }, []);

    const [option, setOption] = useState({
        grid: {top: 128, right: 8, left: 8},
        xAxis: {
            type: "category",
            data: [
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
                "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
            ],
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
                data: [
                    820, 932, 901, 934, 1290, 1330, 1320,
                    820, 932, 901, 934, 1290, 1330, 1320,
                    820, 932, 901, 934, 1290, 1330, 1320,
                    820, 932, 901, 934, 1290, 1330, 1320
                ],
                type: "line",
                smooth: true,
            },
        ],
        tooltip: {
            // triggerOn: "click",
            trigger: "axis",
            // position: "top"
        },
    });

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