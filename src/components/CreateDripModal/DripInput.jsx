import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

const DripInput = ({ type, label }) => {
    return (
        <Input
            type={type}
            label={label}
            size="sm"
            autofocus={label === "Drip Name"}
        />
    );
};

DripInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default DripInput;
