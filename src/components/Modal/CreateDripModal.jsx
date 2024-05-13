import { useDisclosure } from "@nextui-org/react";
import CreateDripButton from "./CreateDripButton";
import DripModal from "./DripModal";

const CreateDripModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <CreateDripButton onOpen={onOpen} />
            <DripModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};

export default CreateDripModal;
