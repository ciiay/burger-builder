import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
                {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingrdients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Total Price: ${props.price.toFixed(2)}</strong>
            </p>
            <p>Countinue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>
                CANCEL
            </Button>
            <Button btnType='Success' clicked={props.purchaseCountinued}>
                COUNTINUE
            </Button>
        </Aux>
    );
};

orderSummary.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number,
    purchaseCanceled: PropTypes.func,
    purchaseCountinued: PropTypes.func,
};

export default orderSummary;
