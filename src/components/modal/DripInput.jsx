import PropTypes from "prop-types";
import { Input } from "@nextui-org/react";
import React from "react";

const DripInput = React.forwardRef((props, ref) => {
    const { type, label, value, onChange, name, error } = props;

    return (
        <div>
            <Input
                ref={ref}
                type={type}
                label={label}
                size="sm"
                autoFocus={label === "Drip Name"}
                value={value}
                onChange={onChange}
                name={name}
                status={error ? "error" : "default"}
            />
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
});

DripInput.displayName = "DripInput";

DripInput.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    error: PropTypes.object,
};

export default DripInput;
