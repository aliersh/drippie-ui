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

    const archiveDrip = (dripName) => {
        setDrips((prevDrips) => {
            return prevDrips.map((drip) => {
                if (Object.keys(drip)[0] === dripName) {
                    return {
                        ...drip,
                        [dripName]: {
                            ...drip[dripName],
                            status: 3,
                        },
                    };
                } else {
                    return drip;
                }
            });
        });
    }

    const activeDrips = drips.filter((drip) => drip[Object.keys(drip)[0]].status !== 3);

    return (
        <DripContext.Provider value={{ drips: activeDrips, addDrip, toggleDrip, archiveDrip }}>
            {children}
        </DripContext.Provider>
    );
};

DripProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DripProvider;
