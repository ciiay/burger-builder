import React from 'react';
import classes from './BuildControl.css';
import PropTypes from 'prop-types';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            disabled={props.disabled}
            onClick={props.removed}
            className={classes.Less}
        >
            Less
        </button>
        <button onClick={props.added} className={classes.More}>
            More
        </button>
    </div>
);

buildControl.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    removed: PropTypes.func,
    added: PropTypes.func,
};

export default buildControl;
