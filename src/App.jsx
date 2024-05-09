import { NextUIProvider } from "@nextui-org/react"
import CreateDripModal from "./components/CreateDripModal";

const App = () => {
  return (
    <NextUIProvider>
      <CreateDripModal />
    </NextUIProvider>
  );
};

export default App;