import Layout from "../components/Layout";
import React, {useState} from "react";
import {TypeSelection} from "../components/TypeSelection";
import {MyEcharts} from "../components/MyEcharts";

function Statistics() {
    const [type, setType] = useState<RecordType>("-");
    const [option, setOption] = useState({
        grid: {top: 8, right: 8, bottom: 24, left: 36},
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: "line",
                smooth: true,
            },
        ],
        tooltip: {
            trigger: "axis",
        },
    });

    return (
        <Layout>
            <TypeSelection
                value={type}
                onChange={value => setType(() => value)}
            />
            <MyEcharts option={option}/>
        </Layout>
    );
}

export default Statistics;