import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import './stripe.style.css';
import {MessageBox} from "../../Messages/message-box.component";

//TODO Consume from .env file: const stripePromise = loadStripe({process.env.REACT_APP_STRIPE_KEY});
const stripePromise = loadStripe("pk_live_51IEGgMG6omRg8rbCBbWZsgoC84LRmmHb76UnMaesAgFFWyLf5NhWnMC7LK8VDIbbTMMzmHkydcUOtl1zdmveFTZ600bpvyx9dV");

const ServiceCheckoutDisplay = ({ handleClick, totalPrice }) => (
    <div className="pa3 ph5-ns box-payment-stripe">
        <div className="section-stripe">
            <div className="product-stripe">
                <img className="img-stripe"
                     src="https://i.imgur.com/fIOtEJJ.png"
                     alt="9dapps"
                />
                <div className="description-stripe">
                    <h3 className="h3-stripe">Total for service of all the requirements</h3>
                    <h5 className="h5-stripe">$ {totalPrice}</h5>
                </div>
            </div>
            <button type="button" id="checkout-button-stripe" disabled={!totalPrice} role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>
    </div>
);

const PaymentStripeComponent = props => {
    const [message, setMessage] = useState("");
    let totalPrice = props.items.length * 9;

    useEffect(() =>{
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation");
        }

        if (query.get("canceled")) {
            setMessage("Checkout order canceled.");
        }
    }, []);

    const handleClick = async(event) => {
        const stripe = await stripePromise;
        const response = await fetch("/api/v1/stripe", {
            method: 'post',
            headers: {
                'x-9dapps-token': 'token',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"price": totalPrice})
        });
        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error){
            console.log(`result.error.message`);
        }
    };

    return message ? (
            <MessageBox message={message} />
    ) : (
        <ServiceCheckoutDisplay key="1"
            handleClick={handleClick}
            totalPrice={totalPrice}/>
    );
}

const mapStateToProps = state => ({
    items: state.tasks.items,
});

export default connect(
    mapStateToProps,
    null,
)(PaymentStripeComponent);
