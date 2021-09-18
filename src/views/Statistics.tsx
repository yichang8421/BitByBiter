import Layout from "../components/Layout";
import React, {useState} from "react";
import {TypeSelection} from "../components/TypeSelection";
import echarts from "echarts";

function Statistics() {
    const [type, setType] = useState<RecordType>("-");

    return (
        <Layout>
            <TypeSelection
                value={type}
                onChange={value => setType(() => value)}
            />
        </Layout>
    );
}

export default Statistics;