import { NextUIProvider } from "@nextui-org/react";
import DripProvider from "./components/context/DripContext";
import DripNavbar from "./components/navbar/DripNavbar";
import DripList from "./components/List/DripList";

const App = () => {
    return (
        <DripProvider>
            <NextUIProvider>
                <div className="mx-auto max-w-2xl w-full">
                    <DripNavbar />
                    <DripList />
                </div>
            </NextUIProvider>
        </DripProvider>
    );
};

export default App;
