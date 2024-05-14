import { Accordion, AccordionItem } from "@nextui-org/react";
import DripItem from "./DripItem";

const DripList = () => {
    const drips = [{
        "First Drip": {
            status: 1,
            last: 0,
            count: 0,
            config: {
                reentrant: false,
                interval: 60,
                dripcheck: "0x123456789",
                checkparams: "param1,param2",
                actions: [
                    {
                        target: "0x987654321",
                        data: "dummy data",
                        value: 100,
                    },
                ],
            },
        },
    }];

    return (
        <Accordion>
            {drips.map((drip, index) => {
                const dripName = Object.keys(drip)[0];
                return (
                    <AccordionItem key={index} title={dripName}>
                        <DripItem drip={drip[dripName]} />
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
export default DripList;
