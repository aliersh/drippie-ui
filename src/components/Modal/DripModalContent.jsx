import { useState } from "react";
import { useDrip } from "../context/useDrip";
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

const DripModalContent = ({ isOpen, onOpenChange }) => {
    const [dripName, setDripName] = useState("");
    const [interval, setInterval] = useState("");
    const [dripcheckAddress, setDripcheckAddress] = useState("");
    const [dripcheckParameters, setDripcheckParameters] = useState("");
    const [target, setTarget] = useState("");
    const [data, setData] = useState("");
    const [value, setValue] = useState("");

    const { addDrip } = useDrip();

    const handleSubmit = (event) => {
        event.preventDefault();
        const dripObject = {
            [dripName]: {
                status: 1,
                last: 0,
                count: 0,
                config: {
                    reentrant: false,
                    interval: interval,
                    dripcheck: dripcheckAddress,
                    checkparams: dripcheckParameters,
                    actions: [
                        {
                            target: target,
                            data: data,
                            value: value,
                        },
                    ],
                },
            },
        };

        addDrip(dripObject);

        // Clear the form
        setDripName("");
        setInterval("");
        setDripcheckAddress("");
        setDripcheckParameters("");
        setTarget("");
        setData("");
        setValue("");

        //Close the modal
        onOpenChange(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
        >
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="flex flex-col gap-1">
                            Create New Drip
                        </ModalHeader>
                        <ModalBody>
                            <DripInput
                                type="text"
                                label="Drip Name"
                                value={dripName}
                                onChange={(event) =>
                                    setDripName(event.target.value)
                                }
                            />
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">
                                Drip Parameters
                            </h4>
                            <DripInput
                                type="number"
                                label="Interval"
                                value={interval.toString()}
                                onChange={(event) =>
                                    setInterval(Number(event.target.value))
                                }
                            />
                            <DripInput
                                type="text"
                                label="Dripcheck Address"
                                value={dripcheckAddress}
                                onChange={(event) =>
                                    setDripcheckAddress(event.target.value)
                                }
                            />
                            <DripInput
                                type="text"
                                label="Dripcheck Parameters"
                                value={dripcheckParameters}
                                onChange={(event) =>
                                    setDripcheckParameters(event.target.value)
                                }
                            />
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">
                                Drip Actions
                            </h4>
                            <DripInput
                                type="text"
                                label="Target"
                                value={target}
                                onChange={(event) =>
                                    setTarget(event.target.value)
                                }
                            />
                            <DripInput
                                type="text"
                                label="Data"
                                value={data}
                                onChange={(event) =>
                                    setData(event.target.value)
                                }
                            />
                            <DripInput
                                type="number"
                                label="Value"
                                value={value.toString()}
                                onChange={(event) =>
                                    setValue(Number(event.target.value))
                                }
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="flat"
                                onPress={onClose}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" color="primary">
                                Create
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

DripModalContent.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onOpenChange: PropTypes.func.isRequired,
};

export default DripModalContent;
