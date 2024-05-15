import { useDisclosure } from "@nextui-org/react";
import CreateDripButton from "./CreateDripButton";
import DripModalContent from "./DripModalContent";

const CreateDripModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <CreateDripButton onOpen={onOpen} />
            <DripModalContent isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};

export default CreateDripModal;
