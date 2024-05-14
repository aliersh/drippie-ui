import PropTypes from "prop-types";

const DripItem = ({ drip }) => {
    return (
        <div>
            <p>Last: {drip.last}</p>
            <p>Count: {drip.count}</p>
            <p>Interval: {drip.config.interval}</p>
            <p>Dripcheck: {drip.config.dripcheck}</p>
            <p>Checkparams: {drip.config.checkparams}</p>
            <p>Target: {drip.config.actions[0].target}</p>
            <p>Data: {drip.config.actions[0].data}</p>
            <p>Value: {drip.config.actions[0].value}</p>
        </div>
    );
};

DripItem.propTypes = {
    drip: PropTypes.shape({
        dripname: PropTypes.string.isRequired,
        last: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        config: PropTypes.shape({
            interval: PropTypes.number.isRequired,
            dripcheck: PropTypes.string.isRequired,
            checkparams: PropTypes.string.isRequired,
            actions: PropTypes.arrayOf(
                PropTypes.shape({
                    target: PropTypes.string.isRequired,
                    data: PropTypes.string.isRequired,
                    value: PropTypes.number.isRequired,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
};

export default DripItem;
