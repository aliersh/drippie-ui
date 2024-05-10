import PropTypes from "prop-types";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Divider,
} from "@nextui-org/react";
import DripInput from "./DripInput";

const DripModal = ({ isOpen, onOpenChange }) => {
    return (
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
                            <DripInput type="text" label="Drip Name" />
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">
                                Drip Parameters
                            </h4>
                            <DripInput type="number" label="Interval" />
                            <DripInput type="text" label="Dripcheck Address" />
                            <DripInput
                                type="text"
                                label="Dripcheck Parameters"
                            />
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">
                                Drip Actions
                            </h4>
                            <DripInput type="text" label="Target" />
                            <DripInput type="text" label="Data" />
                            <DripInput type="number" label="Value" />
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
    );
};

DripModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
};

export default DripModal;
