import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import PropTypes from 'prop-types';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>
            Current Price: <strong>{props.price.toFixed(2)}</strong>
        </p>
        {controls.map((ctrl) => (
            <BuildControl
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                key={ctrl.label}
                label={ctrl.label}
            />
        ))}
        <button
            onClick={props.ordered}
            disabled={!props.purchaseable}
            className={classes.OrderButton}
        >
            ORDER NOW
        </button>
    </div>
);

buildControls.propTypes = {
    price: PropTypes.number,
    disabled: PropTypes.object,
    ordered: PropTypes.func,
    purchaseable: PropTypes.bool,
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
};

export default buildControls;
