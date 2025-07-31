import { atom, useAtom } from "jotai";

export const formLoadingAtom = atom<boolean>(false);

export const useFormLoadingAtom = () => {
    const [formLoading, setFormLoading] = useAtom(formLoadingAtom);
    return { isLoading: formLoading, setIsLoading: setFormLoading };
};
