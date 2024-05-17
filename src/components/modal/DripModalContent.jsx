import { useDrip } from "../context/useDrip";
import { useForm } from "react-hook-form";
import { isAddress, isHex } from "viem";
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
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    // Fetch the addDrip function from the useDrip context
    const { addDrip } = useDrip();

    const onSubmit = (data) => {
        const dripObject = {
            [data.dripName]: {
                status: 1,
                last: 0,
                count: 0,
                config: {
                    reentrant: false,
                    interval: Number(data.interval),
                    dripcheck: data.dripcheckAddress,
                    checkparams: data.dripcheckParameters,
                    actions: [
                        {
                            target: data.target,
                            data: data.data,
                            value: Number(data.value),
                        },
                    ],
                },
            },
        };

        addDrip(dripObject);
        reset();
        onOpenChange(false);
    };

    // Helper function to render input fields
    const renderDripInput = (label, name, type, validation) => {
        return (
            <DripInput
                type={type}
                label={label}
                error={errors[name]}
                {...register(name, validation)}
            />
        );
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalHeader className="flex flex-col gap-1">Create New Drip</ModalHeader>
                        <ModalBody>
                            {renderDripInput("Drip Name", "dripName", "text", {
                                required: "Drip name is required",
                            })}
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">Drip Parameters</h4>
                            {renderDripInput("Interval", "interval", "number", {
                                required: "Interval is required",
                            })}
                            {renderDripInput("Dripcheck Address", "dripcheckAddress", "text", {
                                required: "Dripcheck address is required",
                                validate: (value) => {
                                    const isValid = isAddress(value);
                                    console.log('Dripcheck Address validation:', value, isValid);
                                    return isValid || "Invalid address";
                                },
                            })}
                            {renderDripInput("Dripcheck Parameters", "dripcheckParameters", "text", {
                                required: "Dripcheck parameters are required",
                                validate: (value) => {
                                    const isValid = isHex(value, { strict: true });
                                    console.log('Dripcheck Parameters validation:', value, isValid);
                                    return isValid || "Invalid hex";
                                },
                            })}
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">Drip Actions</h4>
                            {renderDripInput("Target", "target", "text", {
                                required: "Target is required",
                                validate: (value) => {
                                    const isValid = isAddress(value);
                                    console.log('Target validation:', value, isValid);
                                    return isValid || "Invalid target";
                                },
                            })}
                            {renderDripInput("Data", "data", "text", {
                                required: "Data is required",
                                validate: (value) => {
                                    const isValid = isHex(value, { strict: true });
                                    console.log('Data validation:', value, isValid);
                                    return isValid || "Invalid hex";
                                },
                            })}
                            {renderDripInput("Value", "value", "number", {
                                required: "Value is required",
                            })}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
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
