import { useDrip } from "../context/useDrip";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import DripItem from "./DripItem";

const DripList = () => {
    const { drips, toggleDrip } = useDrip();

    return (
        <Accordion>
            {drips.map((drip, index) => {
                const dripName = Object.keys(drip)[0];
                const isSelected = drip[dripName].status === 2;
                return (
                    <AccordionItem
                        key={index}
                        textValue={dripName}
                        title={
                            <div className="flex justify-between">
                                <span>{dripName}</span>
                                <Switch
                                    isSelected={isSelected}
                                    onChange={() => {
                                        const newStatus = isSelected ? 1 : 2;
                                        toggleDrip(dripName, newStatus);
                                    }}
                                />
                            </div>
                        }
                    >
                        <DripItem drip={drip[dripName]} />
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};
export default DripList;
