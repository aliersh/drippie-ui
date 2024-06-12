import { useDisclosure } from "@nextui-org/react";
import NewDripButton from "./NewDripButton";
import DripModalContent from "./DripModalContent";

const NewDripModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <NewDripButton onOpen={onOpen} />
            <DripModalContent isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};

export default NewDripModal;
