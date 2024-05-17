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
    const [dripDetails  , setDripDetails] = useState({
        dripName: "",
        interval: "",
        dripcheckAddress: "",
        dripcheckParameters: "",
        target: "",
        data: "",
        value: "",
    });

    const { addDrip } = useDrip();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDripDetails((prevDetails) => ({
            ...prevDetails,
            [name]: name === "interval" || name === "value" ? Number(value) : value,
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const dripObject = {
            [dripDetails.dripName]: {
                status: 1,
                last: 0,
                count: 0,
                config: {
                    reentrant: false,
                    interval: dripDetails.interval,
                    dripcheck: dripDetails.dripcheckAddress,
                    checkparams: dripDetails.dripcheckParameters,
                    actions: [
                        {
                            target: dripDetails.target,
                            data: dripDetails.data,
                            value: dripDetails.value,
                        },
                    ],
                },
            },
        };

        addDrip(dripObject);

        // Clear the form
        setDripDetails({
            dripName: "",
            interval: "",
            dripcheckAddress: "",
            dripcheckParameters: "",
            target: "",
            data: "",
            value: "",
        });

        //Close the modal
        onOpenChange(false);
    };

    const renderDripInput = (label, name, type) => {
        return (
            <DripInput
                type={type}
                label={label}
                name={name}
                value={dripDetails[name].toString()}
                onChange={handleChange}
            />
        );
    }

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
                            {renderDripInput("Drip Name", "dripName", "text")}
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">
                                Drip Parameters
                            </h4>
                            {renderDripInput("Interval", "interval", "number")}
                            {renderDripInput("Dripcheck Address", "dripcheckAddress", "text")}
                            {renderDripInput("Dripcheck Parameters", "dripcheckParameters", "text")}
                            <Divider orientation="horizontal" />

                            <h4 className="text-medium font-medium">
                                Drip Actions
                            </h4>
                            {renderDripInput("Target", "target", "text")}
                            {renderDripInput("Data", "data", "text")}
                            {renderDripInput("Value", "value", "number")}
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
