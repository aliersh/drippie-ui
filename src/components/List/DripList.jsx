import { Accordion, AccordionItem } from "@nextui-org/react";
import DripItem from "./DripItem";

const DripList = () => {
    const drips = [
        {
            dripname: "First Drip",
            status: 1,
            last: 0,
            count: 0,
            config: {
                reentrant: false,
                interval: 839275923,
                dripcheck: "add1",
                checkparams: "params1",
                actions: [
                    {
                        target: "target1",
                        data: "data1",
                        value: 64759436598,
                    },
                ],
            },
        },
        {
            dripname: "Second Drip",
            status: 1,
            last: 0,
            count: 0,
            config: {
                reentrant: true,
                interval: 123456789,
                dripcheck: "add2",
                checkparams: "params2",
                actions: [
                    {
                        target: "target2",
                        data: "data2",
                        value: 987654321,
                    },
                ],
            },
        },
        {
            dripname: "Third Drip",
            status: 0,
            last: 0,
            count: 0,
            config: {
                reentrant: true,
                interval: 987654321,
                dripcheck: "add3",
                checkparams: "params3",
                actions: [
                    {
                        target: "target3",
                        data: "data3",
                        value: 123456789,
                    },
                ],
            },
        },
    ];

    return (
        <Accordion>
            {drips.map((drip, index) => (
                <AccordionItem key={index} title={drip.dripname}>
                    <DripItem drip={drip} />
                </AccordionItem>
            ))}
        </Accordion>
    );
};
export default DripList;
