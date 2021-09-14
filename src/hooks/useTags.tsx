import {useEffect, useState} from "react";
import {createId} from "lib/createId";
import {useUpdate} from "./useUpdate";

type Props = {
    id: number;
    name: string
}

const useTags = () => {
    const [tags, setTags] = useState<Props[]>([]);

    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: "衣服"},
                {id: createId(), name: "吃饭"},
                {id: createId(), name: "住房"},
                {id: createId(), name: "出行"}
            ];
        }
        setTags(localTags);
    }, []);

    useUpdate(() => {
        console.log("set Item");
        console.log(JSON.stringify(tags));
        window.localStorage.setItem("tags", JSON.stringify(tags));
    }, [tags]);

    function addTag() {
        const addTagName = window.prompt("请输入添加标签名");
        if (addTagName) {
            const id = createId();
            setTags(() => [
                ...tags,
                {id, name: addTagName}
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