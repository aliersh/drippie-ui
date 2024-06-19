import { createContext, useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import abi from "../../config/abi";
import PropTypes from "prop-types";

export const DripContext = createContext();

const DripProvider = ({ children }) => {
    // State to manage the list of drips
    const [drips, setDrips] = useState([]);

    //Fetch drip count
    const {
        data: dripCount,
        error,
    } = useReadContract({
        abi,
        address: "0xa0fF2a54AdC3fB33c44a141E67d194CF249258cb",
        functionName: "getDripCount",
    });

    useEffect(() => {
        if (dripCount) {
            const count = Number(dripCount);
            console.log(count);
        }
        if (error) {
            console.error(error);
        }
    }, [dripCount, error]);

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
