const dripItem = ({ drip }) => {
    const { status, last, count, config } = drip;
    const { reentrant, interval, dripcheck, checkparams, actions } = config;
    const { target, data, value } = actions[0];

    return (
        <div>
            <p>Status: {status}</p>
            <p>Last: {last}</p>
            <p>Count: {count}</p>
            <p>Reentrant: {reentrant.toString()}</p>
            <p>Interval: {interval}</p>
            <p>Dripcheck: {dripcheck}</p>
            <p>Checkparams: {checkparams}</p>
            <p>Target: {target}</p>
            <p>Data: {data}</p>
            <p>Value: {value}</p>
        </div>
    );
};

export default dripItem;