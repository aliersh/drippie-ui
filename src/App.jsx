import { NextUIProvider } from "@nextui-org/react"
import CreateDripButton from "./components/CreateDripButton";

const App = () => {
  return (
    <NextUIProvider>
      <CreateDripButton />
    </NextUIProvider>
  );
};

export default App;