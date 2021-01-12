import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentDidUpdate() {
        console.log('[OrderSummary] updated!');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey) => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}
                        </span>
                        : {this.props.ingredients[igKey]}
                    </li>
                );
            }
        );
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingrdients:</p>
                <ul>{ingredientSummary}</ul>
                <p>
                    <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
                </p>
                <p>Countinue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>
                    CANCEL
                </Button>
                <Button
                    btnType='Success'
                    clicked={this.props.purchaseCountinued}
                >
                    COUNTINUE
                </Button>
            </Aux>
        );
    }
}

OrderSummary.propTypes = {
    ingredients: PropTypes.object,
    price: PropTypes.number,
    purchaseCanceled: PropTypes.func,
    purchaseCountinued: PropTypes.func,
};

export default OrderSummary;
