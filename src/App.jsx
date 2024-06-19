import { NextUIProvider } from "@nextui-org/react";
import DripProvider from "./components/context/DripContext";
import DripNavbar from "./components/navbar/DripNavbar";
import DripList from "./components/list/DripList";
import { WagmiProvider } from "wagmi";
import { config } from "./config/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <DripProvider>
                    <NextUIProvider>
                        <div className="mx-auto max-w-2xl w-full">
                            <DripNavbar />
                            <DripList />
                        </div>
                    </NextUIProvider>
                </DripProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default App;
