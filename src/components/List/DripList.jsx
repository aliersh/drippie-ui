import { useDrip } from "../context/useDrip";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DripItem from "./DripItem";

const DripList = () => {
    const { drips } = useDrip();

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
