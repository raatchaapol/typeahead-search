import { atom, useAtom } from "jotai";

export const suggestionListAtom = atom<string[]>([]);

export const useSuggestionListAtom = () => {
    const [suggestionList, setSuggestionList] = useAtom(suggestionListAtom);
    return { suggestionList, setSuggestionList };
};
