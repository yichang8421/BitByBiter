import Layout from "../components/Layout";
import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import {ElementCenter} from "../components/CalculatorOutput/ElementCenter";
import {Space} from "../components/CalculatorOutput/Space";
import {TypeSelection} from "../components/TypeSelection";
import dayjs from "dayjs";

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    >.note{
        margin-right: auto;
        font-size: 16px;
        margin-left: 16px;
        color: #b0d703;
    }
`;

const RecordFont = styled.span`
    font-weight: bolder;
    font-size: 18px;
`;

const Header = styled.h3`
    font-size: 18px;
    line-height: 20px;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
`;

function Ledger() {
    const [type, setType] = useState<RecordType>("-");
    const {records} = useRecords();
    const {getTagName} = useTags();
    const hash: { [key: string]: RecordItem[] } = {};

    const selectedRecords = () => {
        return records.filter(r => r.recordType === type);
    };

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

    selectedRecords().map(r => {
        const date = dayjs(r.createAt).toString();
        const key = beautifyDate(date);
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });

    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });

    const ledgerContent = () => {
        return (<div>
            {array.map(([date, record]) => {
                return (<div>
                    <Header>
                        <span>{date}</span>
                        <span>￥{record.reduce(
                            (sum, item) => {
                                return sum + item.amount;
                            }, 0)}
                        </span>
                    </Header>
                    <div>
                        {record.map(r => {
                            return <Item>
                                <div className="tag">
                                    {r.tagIds
                                        .map(tagId => {
                                            return (
                                                <RecordFont>
                                                    {getTagName(tagId)}
                                                </RecordFont>
                                            );
                                        })
                                        .reduce((result, span, index, array) =>
                                                result.concat(
                                                    index < array.length - 1 ?
                                                        [span, "，"] :
                                                        [span]),
                                            [] as ReactNode[])}
                                </div>
                                {r.note && <div className="note">
                                    {r.note}
                                </div>}
                                <div className="amount">
                                    ￥{r.amount}
                                </div>
                            </Item>;
                        })}
                    </div>
                </div>);
            })}
        </div>);
    };

    return (
        <Layout>
            <TypeSelection
                value={type}
                onChange={value => setType(() => value)}
            />
            {
                records.length ?
                    ledgerContent() :
                    <div>
                        <Space/>
                        <Space/>
                        <Space/>
                        <ElementCenter>
                            现在还没有记录，快快记一笔吧!
                        </ElementCenter>
                    </div>
            }
        </Layout>
    );
}

export default Ledger;