'use client';
import { useState } from 'react';
import CardComponent from './cardComponent';
import { CardButton } from './cardComponent';

export default function Page() {
  const [boxAppear, setBoxAppear] = useState(false);
  const [stateChange, setStateChange] = useState(0);

  function handleButtonPress() {
    try {
      if (boxAppear) {
        setBoxAppear(false);
      } else {
        setBoxAppear(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }

    console.log(boxAppear);
    setStateChange(stateChange + 1);
    console.log('stateChange: ' + stateChange);
  }

  const caterogies = ['entertainment', 'eating out', 'outdoors'];

  return (
    <>
      <div>This is the page.</div>
      <button
        onClick={() => {
          handleButtonPress();
        }}
        className="btn btn-primary btn-circle btn-block"
      >
        Push the button
      </button>

      <div>
        <p>State has changed {stateChange} times.</p>
        <CardButton currentCount={stateChange}></CardButton>
      </div>

      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {boxAppear &&
          caterogies.map((category) => (
            <div key={category}>
              <CardComponent title={category} description={category + ' ' + category + ' ' + category} />
            </div>
          ))}
      </div>
    </>
  );
}
