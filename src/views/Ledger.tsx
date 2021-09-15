import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {useRecords} from "../hooks/useRecords";
import {useTags} from "../hooks/useTags";
import {ElementCenter} from "../components/CalculatorOutput/ElementCenter";
import {Space} from "../components/CalculatorOutput/Space";
import day from "dayjs";

const Wrapper = styled.section`
    font-size: 20px;
    font-weight: bolder;
    >ul{
        display: flex;
        >li{
            width: 50%;
            text-align: center;
            padding: 16px 0;
            position:relative;
            &.selected{
                background: #e7f2ff;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.05);
                &::after{
                    content: "";
                    display: block;
                    height: 3px;
                    background: #9acd32;
                    position:absolute;
                    bottom: 0;
                    width: 100%;
                    left: 0;
                }
            }
        }
    }
`;

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

type Props = {
    value: RecordType;
    onChange: (value: RecordType) => void;
}

const TypeSelection: React.FC<Props> = (props: Props) => {
    const typeMap = {
        "-": "支出",
        "+": "收入"
    };
    const [typeList] = useState<RecordType[]>(["-", "+"]);
    const type = props.value;
    return (
        <Wrapper>
            <ul>{
                typeList.map(c =>
                    <li
                        key={c}
                        className={type === c ? "selected" : ""}
                        onClick={() => {
                            props.onChange(c);
                        }}
                    >{typeMap[c]}</li>
                )
            }</ul>
        </Wrapper>
    );
};

function Ledger() {
    const [type, setType] = useState<RecordType>("-");
    const {records} = useRecords();
    const {getTagName} = useTags();

    const ledgerContent = (records: RecordItem[]) => {
        return (<div>
            {records.map(r => {
                return <Item>
                    <div className="tag">
                        {r.tagIds.map(tagId => {
                            return (
                                <RecordFont>{getTagName(tagId)}&nbsp;</RecordFont>
                            );
                        })}
                    </div>
                    {r.note && <div className="note">
                        {r.note}
                    </div>}
                    <div className="amount">
                        ￥{r.amount}
                    </div>
                    {/*{day(r.createAt).format("YYYY年MM月DD")}*/}
                </Item>;
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
                    ledgerContent(records) :
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