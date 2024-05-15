import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DripContext = createContext();

const DripProvider = ({ children }) => {
    const [drips, setDrips] = useState([]);

    const addDrip = (drip) => {
        setDrips(prevDrips => [...prevDrips, drip]);
    };

    const toogleDripStatus = (dripName, newStatus) => {
            setDrips(prevDrips =>  prevDrips.map(drip => {
                if (Object.keys(drip)[0] === dripName) {
                    return {
                        ...drip,
                        [dripName]: {
                            ...drip[dripName],
                            status: newStatus
                        }
                    };
                } else {
                    return drip;
                }
            }))
        }

        return (
        <DripContext.Provider value={{ drips, addDrip, toogleDripStatus }}>
            {children}
        </DripContext.Provider>
    );
};

DripProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DripProvider;