import { VStack } from "@chakra-ui/react";
import { SearchBox } from "components/SearchBox";

function App() {
    return (
        <VStack
            width="full"
            spaceY={4}
            alignItems="start"
            justifyContent="center"
        >
            <SearchBox />
        </VStack>
    );
}

export default App;
