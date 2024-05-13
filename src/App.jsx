import { NextUIProvider } from "@nextui-org/react";
import DripNavbar from "./components/Navbar/DripNavbar";
import DripList from "./components/List/DripList";

const App = () => {
    return (
        <NextUIProvider>
            <div className="mx-auto max-w-2xl w-full">
                <DripNavbar />
                <DripList />
            </div>
        </NextUIProvider>
    );
};

export default App;
