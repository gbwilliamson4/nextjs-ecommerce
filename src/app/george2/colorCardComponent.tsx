'use client';

import { useState, useTransition } from 'react';

// I believe we need the functions on the Page.tsx file and then pass in the functions to here.

interface colorCardProps {
  cardMoney: number;
  // setMoneyQuantity: (quantity: number) => Promise<void>; // when this comes from the database, activate this one.
  setMoneyQuantity: (quantity: number) => void;
}

export default function ColorCard({ cardMoney, setMoneyQuantity }: colorCardProps) {
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [isPending, startTransition] = useTransition();

  function handleMoney(money: number) {
    setMoneyAmount(money);
    setMoneyQuantity(moneyAmount);
    console.log('within handleMoney function. moneyAmount: ' + moneyAmount);
  }

  return (
    <div className="card w-96 bg-red-600 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Red</h2>
        {/* <p>{cardMoney}</p> */}
        <p>{moneyAmount}</p>
        <div className="card-actions justify-end grid-cols-2">
          {/* <button
            onClick={() =>
              startTransition(async () => {
                setMoneyQuantity(cardMoney + 1);
              })
            }
            className="btn btn-primary"
            disabled={isPending}
          >
            Add Money
          </button>
          <button
            onClick={() =>
              startTransition(async () => {
                setMoneyQuantity(cardMoney - 1);
              })
            }
            className="btn btn-primary"
            disabled={isPending}
          >
            Remove Money
          </button> */}
          <button className="btn btn-primary" onClick={() => handleMoney(moneyAmount + 1)}>
            Manipulate
          </button>
        </div>
      </div>
    </div>
  );
}

// startTransition(async () => {
//   await setMoneyQuantity(cardMoney - 1);
// });
