import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";
import { PlusIcon } from "@heroicons/react/24/solid";

const NewDripButton = ({ onOpen }) => {
    return (
        <Button
            onPress={onOpen}
            color="primary"
            startContent={<PlusIcon className="size-4" />}
        >
            Create Drip
        </Button>
    );
};

NewDripButton.propTypes = {
    onOpen: PropTypes.func.isRequired,
};

export default NewDripButton;
