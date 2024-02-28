import React from 'react';
import CheckoutSteps from '../Payment/CheckoutSteps'; 

const mockFulfillmentData = [
  { orderId: '001', productName: 'Widget A', status: 'shipped' },
  { orderId: '002', productName: 'Widget B', status: 'unshipped' },
  
];

function Fulfillment() {
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="form">
        <ul className="form-container">
          <li>
            <h2>Fulfillment</h2>
          </li>
          {mockFulfillmentData.map(({ orderId, productName, status }) => (
            <li key={orderId} className={`order-item ${status === 'unshipped' ? 'unshipped' : ''}`}>
              <div>
                <span>Order ID: {orderId}</span><br />
                <span>Product: {productName}</span><br />
                <span>Status: {status}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Fulfillment;

