import {useEffect, useState} from "react";
import {createId} from "lib/createId";

const defaultTags = [
    {id: createId(), name: "衣服"},
    {id: createId(), name: "吃饭"},
    {id: createId(), name: "住房"},
    {id: createId(), name: "出行"}
];

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        setTags(JSON.parse(window.localStorage.getItem("tags") || "[]"));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("tags", JSON.stringify(tags));
    }, [tags]);

    function addTag() {
        const addTagName = window.prompt("请输入添加标签名");
        if (addTagName) {
            setTags(() => [
                ...tags,
                {id: createId(), name: addTagName}
            ]);
        }
    }

    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];

    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };

    const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
    };

    const deleteTag = (id: number) => {
        setTags(() => {
            return tags.filter(tag => tag.id !== id);
        });
    };

    return {addTag, tags, setTags, findTag, findTagIndex, updateTag, deleteTag};
};

export {useTags};