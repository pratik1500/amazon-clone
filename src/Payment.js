import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* payment section - delivery address*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address-</h3>
          </div>
          <div className="payment__address">
            <p> {user?.email}</p>
            <p>123 React Lane</p>
            <p>Los angles,CA</p>
          </div>
        </div>
        {/* payment section - review items*/}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment section - payment methods*/}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details">{/* Stripe magic will go*/}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
