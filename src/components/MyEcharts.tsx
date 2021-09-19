import React, {useEffect, useRef} from "react";
import echarts from "echarts";

type Props = {
    option: any;
}

const MyEcharts: React.FC<Props> = (props: Props) => {
    const container = useRef(null);
    const chart = useRef(null);
    const {option} = props;

    useEffect(() => {
        // const width = document.documentElement.clientWidth;
        // @ts-ignore
        container.current.style.width = `400%`;
        // @ts-ignore
        container.current.style.height = `500px`;
        // @ts-ignore
        chart.current = echarts.init(container.current, "");
    }, []);

    useEffect(() => {
        // @ts-ignore
        chart.current.setOption(option);
    }, [option]);

    return (
        <div>
            <div ref={container}/>
        </div>
    );
};

export {MyEcharts};