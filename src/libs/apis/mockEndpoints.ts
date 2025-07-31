type FetchSuggestionsResponse = {
    data: string[];
    status: number;
    statusText: string;
};

const mockSuggestions = [
    'apple', 'banana', 'grape', 'orange', 'pear', 'peach', 'apricot', 'avocado', 'blueberry', 'blackberry'
];

const fetchSuggestions = (query: string): Promise<FetchSuggestionsResponse> => {
    return new Promise((resolve) => {
        const delay = Math.random() * 1000 + 100;

        setTimeout(() => {
            const filteredSuggestions = mockSuggestions.filter(suggestion => suggestion.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
            const response = {
                data: filteredSuggestions,
                status: 200,
                statusText: 'OK'
            };

            resolve(response);
        }, delay);
    });
};

export { fetchSuggestions };
