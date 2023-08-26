// Write all the code here
import React from "react";
const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"sjda 12-32ss dsad"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Stuart"}
          </p>
          <p>
            <b>Phone</b>
            {2131232123}
          </p>
        </div>
        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"23-02-2002"}
          </p>
          <p>
            <b>Delivered At</b>
            {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"COD"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"23-02-2003"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>€{58}
          </p>
          <p>
            <b>Shipping Charges</b>€{5}
          </p>
          <p>
            <b>Tax</b>€{2}
          </p>
          <p>
            <b>Total Amount</b>€{2 + 5 + 58}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{2}</span> x <span>{20}</span>
            </div>
          </div>
          <div>
          <h4>Royal Burger</h4>
            <div>
              <span>{2}</span> x <span>{24}</span>
            </div>
          </div>
          <div>
            <h4>Classic Burger Fries</h4>
            <div>
              <span>{1}</span> x <span>{14}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              €{65}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};
export default OrderDetails;
