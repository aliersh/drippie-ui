import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DripContext = createContext();

const DripProvider = ({ children }) => {
    const [drips, setDrips] = useState([]);

    const addDrip = (drip) => {
        setDrips((prevDrips) => [...prevDrips, drip]);
    };

    const toggleDrip = (dripName, newStatus) => {
        const currentTimestamp = Math.floor(Date.now() / 1000);

        setDrips((prevDrips) => {
            return prevDrips.map((drip) => {
                if (Object.keys(drip)[0] === dripName) {
                    const updatedDrip = {
                        ...drip[dripName],
                        status: newStatus,
                    };

                    if (newStatus === 2) {
                        updatedDrip.last = currentTimestamp;
                        updatedDrip.count = drip[dripName].count + 1;
                    }

                    return {
                        ...drip,
                        [dripName]: updatedDrip,
                    };
                } else {
                    return drip;
                }
            });
        });
    };

    return (
        <DripContext.Provider value={{ drips, addDrip, toggleDrip }}>
            {children}
        </DripContext.Provider>
    );
};

DripProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DripProvider;
