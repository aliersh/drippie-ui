import { NextUIProvider } from "@nextui-org/react";
import CreateDripModal from "./components/Modal/CreateDripModal";

const App = () => {
    return (
        <NextUIProvider>
            <CreateDripModal />
        </NextUIProvider>
    );
};

export default App;
