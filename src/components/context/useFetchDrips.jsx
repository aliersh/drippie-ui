import { useReadContract, useReadContracts } from "wagmi";
import { useEffect, useState } from "react";
import abi from "../../config/abi";

const useFetchDrips = () => {
    const [contractCallsNames, setContractCallsNames] = useState([]);
    const [contractCallStats, setContractCallStats] = useState([]);
    const [drips, setDrips] = useState({});

    // First call to getDripCount
    const { data: dripCount, error: dripCountError } = useReadContract({
        abi,
        address: "0xa0fF2a54AdC3fB33c44a141E67d194CF249258cb",
        functionName: "getDripCount",
    });

    useEffect(() => {
        if (dripCount !== undefined) {
            console.log(`Drips count: ${dripCount}`);
            const names = Array.from({ length: Number(dripCount) }).map(
                (_, index) => ({
                    abi,
                    address: "0xa0fF2a54AdC3fB33c44a141E67d194CF249258cb",
                    functionName: "created",
                    args: [index],
                })
            );
            setContractCallsNames(names);
        }

        if (dripCountError) {
            console.log(dripCountError.message);
        }
    }, [dripCount, dripCountError]);

    // Second call to get drip names
    const { data: fetchedDripsNames, error: dripNamesError } = useReadContracts(
        {
            contracts: contractCallsNames,
        }
    );

    useEffect(() => {
        if (fetchedDripsNames) {
            console.log("Fetched drip names:", fetchedDripsNames);
            const stats = fetchedDripsNames.map((dripName) => ({
                abi,
                address: "0xa0fF2a54AdC3fB33c44a141E67d194CF249258cb",
                functionName: "drips",
                args: [dripName],
            }));
            setContractCallStats(stats);
        }

        if (dripNamesError) {
            console.log(dripNamesError.message);
        }
    }, [fetchedDripsNames, dripNamesError]);

    // Third call to get drip stats
    const { data: fetchedDripsStats, error: dripStatsError } = useReadContracts(
        {
            contracts: contractCallStats,
        }
    );

    useEffect(() => {
        if (fetchedDripsStats && fetchedDripsNames) {
            console.log("Fetched drip stats:", fetchedDripsStats);
            // Transform the fetched data into the desired template
            const transformedDrips = fetchedDripsStats.reduce(
                (acc, curr, index) => {
                    if (curr.result && curr.result.length === 4) {
                        const [status, config, last, count] = curr.result;
                        const name = fetchedDripsNames[index]?.result; // Use the name fetched from the second call
                        acc[name] = {
                            status,
                            last,
                            count,
                            config: {
                                reentrant: config.reentrant,
                                interval: config.interval,
                                dripcheck: config.dripcheck,
                                checkparams: config.checkparams,
                                actions: config.actions.map((action) => ({
                                    target: action.target,
                                    data: action.data,
                                    value: action.value.toString(),
                                })),
                            },
                        };
                    }
                    return acc;
                },
                {}
            );
            setDrips(transformedDrips);
            console.log(transformedDrips);
        }

        if (dripStatsError) {
            console.log(dripStatsError.message);
        }
    }, [fetchedDripsStats, fetchedDripsNames, dripStatsError]);

    return { drips };
};

export default useFetchDrips;
