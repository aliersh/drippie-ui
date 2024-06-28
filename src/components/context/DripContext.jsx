import { createContext, useEffect, useState } from "react";
import useFetchDrips from "./useFetchDrips";
import PropTypes from "prop-types";

export const DripContext = createContext();

const DripProvider = ({ children }) => {
    // States to manage the list of drips
    const { drips: fetchedDrips } = useFetchDrips();
    const [drips, setDrips] = useState([]);

    // Fetch and update of external drips
    useEffect(() => {
        if (fetchedDrips) {
            setDrips(
                Object.entries(fetchedDrips).map(([name, data]) => ({
                    [name]: data,
                }))
            );
        }
    }, [fetchedDrips]);

    // Function to add a new drip to the list
    const addDrip = (drip) => {
        setDrips((prevDrips) => [...prevDrips, drip]);
    };

    // Function to toggle the status of a drip
    const toggleDrip = (dripName, newStatus) => {
        const currentTimestamp = Math.floor(Date.now() / 1000);

        // Update the drips state with the new status
        setDrips((prevDrips) => {
            return prevDrips.map((drip) => {
                if (Object.keys(drip)[0] === dripName) {
                    const updatedDrip = {
                        ...drip[dripName],
                        status: newStatus,
                    };

                    // If the new status is active, update the last execution timestamp and increment the count
                    if (newStatus === 2) {
                        updatedDrip.last = currentTimestamp;
                        const currentCount = drip[dripName].count;

                        // Check if currentCount is a BigInt and convert if necessary
                        updatedDrip.count =
                            typeof currentCount === "bigint"
                                ? Number(currentCount) + 1
                                : currentCount + 1;
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

    // Function to archive a drip by setting its status to 3
    const archiveDrip = (dripName) => {
        setDrips((prevDrips) => {
            return prevDrips.map((drip) => {
                if (Object.keys(drip)[0] === dripName) {
                    const updatedDrip = {
                        ...drip[dripName],
                        status: 3,
                    };
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

    // Filter active drips (status is not 3)
    const activeDrips = drips.filter(
        (drip) => drip[Object.keys(drip)[0]].status !== 3
    );

    // Providing the drips and actions to the context
    return (
        <DripContext.Provider
            value={{ drips: activeDrips, addDrip, toggleDrip, archiveDrip }}
        >
            {children}
        </DripContext.Provider>
    );
};

DripProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DripProvider;
