import { Box, Heading, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { TypeAheadInput } from "./components/form/TypeAheadInput";
import { useFormLoadingAtom } from "./libs/atoms/useFormLoadingAtom";
import { useSuggestionListAtom } from "./libs/atoms/useSuggestionListAtom";

function App() {
    const { suggestionList } = useSuggestionListAtom();
    const { isLoading } = useFormLoadingAtom();

    return (
        <VStack spaceY={4} alignItems="start" justifyContent="center" h="100vh">
            <Heading as="h1" size="2xl">
                Find your favorite food
            </Heading>
            <TypeAheadInput />
            {isLoading && <Spinner size="lg" color="green.400" />}
            {suggestionList.length > 0 && (
                <HStack spaceX={1} alignItems="start" justifyContent="start">
                    {suggestionList.map((suggestion) => (
                        <Box
                            key={suggestion}
                            px={4}
                            py={2}
                            borderRadius="md"
                            bg="gray.800"
                        >
                            <Text textTransform="capitalize">{suggestion}</Text>
                        </Box>
                    ))}
                </HStack>
            )}
        </VStack>
    );
}

export default App;
