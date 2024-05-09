import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Divider,
} from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/solid";

const CreateDripModal = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                onPress={onOpen}
                color="primary"
                startContent={<PlusIcon className="size-4" />}
            >
                Create Drip
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Create New Drip
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    type="text"
                                    label="Drip Name"
                                    size="sm"
                                    autoFocus
                                />
                                <Divider orientation="horizontal" />
                                <h4 className="text-medium font-medium">
                                    Drip Parameters
                                </h4>
                                <Input
                                    type="number"
                                    label="Interval"
                                    size="sm"
                                />
                                <Input
                                    type="text"
                                    label="Dripcheck Address"
                                    size="sm"
                                />
                                <Input
                                    type="text"
                                    label="Dripcheck Parameters"
                                    size="sm"
                                />
                                <Divider orientation="horizontal" />
                                <h4 className="text-medium font-medium">
                                    Drip Actions
                                </h4>
                                <Input type="text" label="Target" size="sm" />
                                <Input type="text" label="Data" size="sm" />
                                <Input type="number" label="Value" size="sm" />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateDripModal;
