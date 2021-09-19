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
        console.log(container.current);
        const width = document.documentElement.clientWidth;
        // @ts-ignore
        container.current.style.width = `${width - 20}px`;
        // @ts-ignore
        container.current.style.height = `${(width - 20) * 1.2}px`;
        // @ts-ignore
        chart.current = echarts.init(container.current, "dark");
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