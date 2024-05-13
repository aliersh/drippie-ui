import { NextUIProvider } from "@nextui-org/react";
import DripNavbar from "./components/Navbar/DripNavbar";

const App = () => {
    return (
        <NextUIProvider>
            <DripNavbar />
        </NextUIProvider>
    );
};

export default App;
