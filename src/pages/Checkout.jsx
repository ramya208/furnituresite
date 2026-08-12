import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    alert("Order placed successfully!");

    navigate("/");
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Customer Details */}
        <div className="customer-details">
          <h2>Customer Details</h2>

          <form onSubmit={handlePlaceOrder}>
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <textarea
              placeholder="Address"
              rows="4"
              required
            ></textarea>

            <input
              type="text"
              placeholder="City"
              required
            />

            <input
              type="text"
              placeholder="Pincode"
              required
            />

            <h2>Payment Method</h2>

            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                defaultChecked
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="card"
              />
              Card
            </label>

            <button type="submit">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
              ))}

              <hr />

              <div className="total">
                <span>Total</span>
                <strong>₹{total}</strong>
              </div>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default Checkout;