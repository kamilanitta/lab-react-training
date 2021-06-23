import React from 'react';
import Visa from './visa.png';
import MasterCard from './master-card.svg';

function CreditCard(props) {
  return (
    <div className="cc-box card-box">
      <img
        className="type-logo"
        scr={props.type === 'Visa' ? Visa : MasterCard}
        alt="Flag"
      ></img>
      <span className="card-number">
        .... .... .... {props.number.split('').slice(12).toString()}
      </span>
      <div className="info-bank">
        <span>
          Expire: {props.expirationMonth}/{props.expirationYear}
        </span>
        <span className="bank-name">{props.bank}</span>
      </div>
      <span className="info-bank info-name">{props.owner}</span>
    </div>
  );
}
export default CreditCard;
