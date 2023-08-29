'use client';
import React, { useState } from 'react';

export default function Page() {
  const [redMoney, setRedMoney] = useState(0);
  const [blackMoney, setBlackMoney] = useState(0);
  const [greenMoney, setGreenMoney] = useState(0);
  const [playerMoney, setPlayerMoney] = useState(10);
  const [cardValue, setCardValue] = useState(0);

  function addMoney(color: string) {
    if (color === 'red' && playerMoney > 0) {
      setRedMoney(redMoney + 1);
      setPlayerMoney(playerMoney - 1);
    } else if (color === 'black' && playerMoney > 0) {
      setBlackMoney(blackMoney + 1);
      setPlayerMoney(playerMoney - 1);
    } else if (color === 'green' && playerMoney > 0) {
      setGreenMoney(greenMoney + 1);
      setPlayerMoney(playerMoney - 1);
    } else {
      //   Either something went wrong OR player has no money left.
    }
  }

  function removeMoney(color: string) {
    if (color === 'red' && redMoney > 0) {
      setRedMoney(redMoney - 1);
      setPlayerMoney(playerMoney + 1);
    } else if (color === 'black' && blackMoney > 0) {
      setBlackMoney(blackMoney - 1);
      setPlayerMoney(playerMoney + 1);
    } else if (color === 'green' && greenMoney > 0) {
      setGreenMoney(greenMoney - 1);
      setPlayerMoney(playerMoney + 1);
    } else {
      //   Either something went wrong OR player has no money left.
    }
  }

  function spinWheel() {
    // get number.

    const winner = Math.floor(Math.random() * 3) + 1; // this ensures the winning number wont ever be 0.
    console.log('winning number is: ' + winner);
    // calculate winning bets and such.
    // 1 = red, 2 = black, 3 = green
    if (winner === 1) {
      setPlayerMoney(playerMoney + redMoney);
      setBlackMoney(0);
      setGreenMoney(0);
    } else if (winner === 2) {
      setPlayerMoney(playerMoney + blackMoney);
      setRedMoney(0);
      setGreenMoney(0);
    } else if (winner === 3) {
      setPlayerMoney(playerMoney + greenMoney);
      setRedMoney(0);
      setBlackMoney(0);
    } else {
      console.log('Something went wrong.');
    }
  }

  function handleCardValue() {
    setCardValue(cardValue + 1);
  }

  return (
    <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div className="card w-96 bg-red-600 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Red</h2>
          <p>{redMoney}</p>
          <div className="card-actions justify-end grid-cols-2">
            <button onClick={() => addMoney('red')} className="btn btn-primary">
              Add Money
            </button>
            <button onClick={() => removeMoney('red')} className="btn btn-primary">
              Remove Money
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-black shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Black</h2>
          <p>{blackMoney}</p>
          <div className="card-actions justify-end grid-cols-2">
            <button onClick={() => addMoney('black')} className="btn btn-primary">
              Add Money
            </button>
            <button onClick={() => removeMoney('black')} className="btn btn-primary">
              Remove Money
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-green-700 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Green</h2>
          <p>{greenMoney}</p>
          <div className="card-actions justify-end grid-cols-2">
            <button onClick={() => addMoney('green')} className="btn btn-primary">
              Add Money
            </button>
            <button onClick={() => removeMoney('green')} className="btn btn-primary">
              Remove Money
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Players Money:</h2>
          <p>{playerMoney}</p>
        </div>
      </div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Spin!</h2>
          <div className="card-actions justify-center">
            <button onClick={() => spinWheel()} className="btn btn-primary">
              Spin Wheel!
            </button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div onClick={() => handleCardValue()} className="card-body">
          <h2 className="card-title">Click to make the value higher!</h2>
          <div className="card-actions justify-center">{cardValue}</div>
        </div>
      </div>
    </div>
  );
}
