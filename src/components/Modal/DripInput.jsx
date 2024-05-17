import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";

const DripInput = ({ type, label, value, onChange, name }) => {
    return (
        <Input
            type={type}
            label={label}
            size="sm"
            autoFocus={label === "Drip Name"}
            value={value}
            onChange={onChange}
            name={name}
        />
    );
};

DripInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default DripInput;
