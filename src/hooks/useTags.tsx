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
        window.localStorage.setItem("tags", JSON.stringify(tags));
    }, [tags]);

    function addTag(addTag: string) {
        if (addTag) {
            for (let i = 0; i < tags.length; i++) {
                let name = tags[i].name;
                if (addTag === name){
                    window.alert("此标签已存在哦");
                    return false;
                }
            }

            const id = createId();
            setTags(() => [
                ...tags,
                {id, name: addTag}
            ]);
            return true;
        }
        return false;
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

    const getTagName = (id: number) => {
        const tag = findTag(id);
        return tag ? tag.name : "";
    };

    const updateTag = (id: number, {name}: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
    };

    const deleteTag = (id: number) => {
        setTags(() => {
            return tags.filter(tag => tag.id !== id);
        });
    };

    return {addTag, tags, setTags, findTag, findTagIndex, getTagName, updateTag, deleteTag};
};

export {useTags};