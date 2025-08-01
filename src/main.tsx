import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "components/chakra/provider";
import { Container } from "@chakra-ui/react";
import { ApiProvider } from "libs/apis";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ApiProvider>
            <Provider>
                <Container maxW="container.xl">
                    <App />
                </Container>
            </Provider>
        </ApiProvider>
    </StrictMode>
);
