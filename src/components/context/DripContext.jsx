import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DripContext = createContext();

const DripProvider = ({ children }) => {
    const [drips, setDrips] = useState([]);

    const addDrip = (drip) => {
        setDrips(prevDrips => [...prevDrips, drip]);
    };

    return (
        <DripContext.Provider value={{ drips, addDrip }}>
            {children}
        </DripContext.Provider>
    );
};

DripProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DripProvider;