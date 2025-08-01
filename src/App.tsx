import { VStack } from "@chakra-ui/react";
import { SearchExample } from "components/SearchExample";

function App() {
    return (
        <VStack
            width="full"
            spaceY={4}
            alignItems="start"
            justifyContent="center"
        >
            <SearchExample />
        </VStack>
    );
}

export default App;
