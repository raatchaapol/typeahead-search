import { useRef, useCallback } from 'react';

export const useDebounce = <TArgs extends unknown[], TReturn>(
    fn: (...args: TArgs) => Promise<TReturn>,
    delay: number
) => {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    return useCallback((...args: TArgs): Promise<TReturn> => {
        return new Promise((resolve, reject) => {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(async () => {
                try {
                    const result = await fn(...args);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            }, delay);
        });
    }, [fn, delay]);
};
