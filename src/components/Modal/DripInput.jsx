import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

const DripInput = ({ type, label, value, onChange }) => {
    return (
        <Input
            type={type}
            label={label}
            size="sm"
            autofocus={label === "Drip Name"}
            value={value}
            onChange={onChange}
        />
    );
};

DripInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DripInput;
