type RecordType = "-" | "+";

type RecordItem = {
    tagIds: number[];
    note: "";
    recordType: RecordType;
    amount: 0;
    createAt: string;
}

type newRecordItem = Omit<RecordItem, "createAt">