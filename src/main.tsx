import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "components/chakra/provider";
import { Container } from "@chakra-ui/react";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider>
            <Container maxW="container.xl">
                <App />
            </Container>
        </Provider>
    </StrictMode>
);
