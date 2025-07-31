import { useState, useRef, useCallback } from "react";
import { fetchSuggestions } from "../../../libs/apis/mockEndpoints";
import { useDebounce } from "./useDebounce";
import { useSuggestionListAtom } from "../../../libs/atoms/useSuggestionListAtom";
import { useFormLoadingAtom } from "../../../libs/atoms/useFormLoadingAtom";

export const useTypeAheadInput = () => {
    const [query, setQuery] = useState("");
    const { setSuggestionList } = useSuggestionListAtom();
    const { setIsLoading } = useFormLoadingAtom();
    const requestIdRef = useRef(0);

    const debouncedFetchSuggestions = useDebounce(fetchSuggestions, 500);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (!value.trim()) {
            setSuggestionList([]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        const currentRequestId = ++requestIdRef.current;

        debouncedFetchSuggestions(value)
            .then((response) => {
                console.log("response", response);
                // Only update if this is still the most recent request
                if (currentRequestId === requestIdRef.current) {
                    setSuggestionList(response.data);
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                // Only handle error if this is still the most recent request
                if (currentRequestId === requestIdRef.current) {
                    console.error('Failed to fetch suggestions:', error);
                    setSuggestionList([]);
                    setIsLoading(false);
                }
            });
    }, [debouncedFetchSuggestions, setSuggestionList, setIsLoading]);

    return { query, handleChange };
};
