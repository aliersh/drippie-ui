import { useDrip } from "../context/useDrip";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { TrashIcon } from "@heroicons/react/16/solid";
import DripItem from "./DripItem";

const DripList = () => {
    const { drips, toggleDrip, archiveDrip } = useDrip();

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
                                <div className="flex">
                                    <Switch
                                        isSelected={isSelected}
                                        onChange={() => {
                                            const newStatus = isSelected
                                                ? 1
                                                : 2;
                                            toggleDrip(dripName, newStatus);
                                        }}
                                    />
                                    <Button
                                        onPress={() => archiveDrip(dripName)}
                                        className="min-w-0 h-8"
                                        color="danger"
                                        startContent={
                                            <TrashIcon className="h-4 w-4" />
                                        }
                                    ></Button>
                                </div>
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
