import { useDrip } from "../context/useDrip";
import { useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    Chip,
    TableColumn,
} from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { TrashIcon, EyeIcon } from "@heroicons/react/16/solid";
import DripItem from "./DripItem";

const DripList = () => {
    // Using the custom useDrip hook to access drips, toggleDrip and archiveDrip functions
    const { drips, toggleDrip, archiveDrip } = useDrip();

    // State to manage visibility of details for each drip
    const [detailsVisible, setDetailsVisible] = useState({});

    // Function to toggle the visibility of details for a specific drip
    const toggleDetails = (dripName) => {
        setDetailsVisible((prev) => ({
            ...prev,
            [dripName]: !prev[dripName],
        }));
    };

    return (
        <div className="space-y-4">
            {drips.map((drip, index) => {
                const dripName = Object.keys(drip)[0];
                const isSelected = drip[dripName].status === 2;
                const isDetailsVisible = detailsVisible[dripName];

                return (
                    <div key={index}>
                        <Table
                            aria-label={`Drip Table ${dripName}`}
                            className="w-full"
                            hideHeader
                        >
                            <TableHeader>
                                <TableColumn className="w-1/2">
                                    Drip Name
                                </TableColumn>
                                <TableColumn className="w-1/6">
                                    Activate
                                </TableColumn>
                                <TableColumn className="w-1/6">
                                    Status
                                </TableColumn>
                                <TableColumn className="w-1/6">
                                    Actions
                                </TableColumn>
                            </TableHeader>
                            <TableBody>
                                <TableRow key={dripName} textValue={dripName}>
                                    <TableCell className="w-1/2">
                                        {dripName}
                                    </TableCell>
                                    <TableCell className="w-1/6">
                                        <Switch
                                            isSelected={isSelected}
                                            onChange={() => {
                                                const newStatus = isSelected
                                                    ? 1
                                                    : 2;
                                                toggleDrip(dripName, newStatus);
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell className="w-1/6 items-center">
                                        {isSelected ? (
                                            <Chip color="success" className="capitalize" size="sm" variant="flat">Active</Chip>
                                        ) : (
                                            <Chip color="warning" className="capitalize" size="sm" variant="flat">
                                                Inactive
                                            </Chip>
                                        )}
                                    </TableCell>
                                    <TableCell className="flex space-x-2">
                                        <Button
                                            onPress={() =>
                                                archiveDrip(dripName)
                                            }
                                            className="min-w-0 h-8"
                                            color="danger"
                                            isDisabled={isSelected}
                                            startContent={
                                                <TrashIcon className="h-4 w-4" />
                                            }
                                        />
                                        <Button
                                            onPress={() =>
                                                toggleDetails(dripName)
                                            }
                                            className="min-w-0 h-8"
                                            color="primary"
                                            startContent={
                                                <EyeIcon className="h-4 w-4" />
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        {isDetailsVisible && (
                            <div className="mt-4">
                                <DripItem drip={drip[dripName]} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default DripList;
