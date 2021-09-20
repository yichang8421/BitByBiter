import Layout from "../components/Layout";
import React, {ReactNode, useState} from "react";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import {ElementCenter} from "../components/CalculatorOutput/ElementCenter";
import {Space} from "../components/CalculatorOutput/Space";
import {TypeSelection} from "../components/TypeSelection";
import dayjs from "dayjs";
import {beautifyDate} from "../lib/beautifyDate";

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

        return {data: beautifyDate(date), total, type: type[0]};
    });

    const ledgerContent = () => {
        return (<div>
            {array.map(([date, record]) => {
                const total = record.reduce(
                    (sum, item) => {
                        return sum + item.amount;
                    }, 0);

                return (<div>
                    <Header>
                        <span>{beautifyDate(date)}</span>
                        <span>￥{total}</span>
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