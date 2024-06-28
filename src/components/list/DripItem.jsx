import { Card,CardBody } from "@nextui-org/react";

const dripItem = ({ drip }) => {
    const { status, last, count, config } = drip;
    const { reentrant, interval, dripcheck, checkparams, actions } = config;
    
    const target = actions && actions[0] ? actions[0].target : "N/A";
    const data = actions && actions[0] ? actions[0].data : "N/A";
    const value = actions && actions[0] ? actions[0].value : "N/A";


    return (
        <Card>
            <CardBody>
                <div className="p-4">
                    <p className="text-small leading-5 text-default-600">Status: {status}</p>
                    <p className="text-small leading-5 text-default-600">Last: {last}</p>
                    <p className="text-small leading-5 text-default-600">Count: {count}</p>
                    <p className="text-small leading-5 text-default-600">Reentrant: {reentrant.toString()}</p>
                    <p className="text-small leading-5 text-default-600">Interval: {interval}</p>
                    <p className="text-small leading-5 text-default-600">Dripcheck: {dripcheck}</p>
                    <p className="text-small leading-5 text-default-600">Checkparams: {checkparams}</p>
                    <p className="text-small leading-5 text-default-600">Target: {target}</p>
                    <p className="text-small leading-5 text-default-600">Data: {data}</p>
                    <p className="text-small leading-5 text-default-600">Value: {value}</p>
                </div>
            </CardBody>
        </Card>
    );
};

export default dripItem;