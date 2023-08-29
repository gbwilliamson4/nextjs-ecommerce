import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import ColorCard from './colorCardComponent';
import { revalidatePath } from 'next/cache';

let cardMoney = 10;

export async function setMoneyQuantity(amount: number) {
  'use server';
  console.log('setMoneyQuantity function triggered. Amount: ' + amount);
  cardMoney = amount;
  revalidatePath('/george2');
}

export default async function Page() {
  'use client';
  const session = await getServerSession(authOptions);
  //   const cardMoney = 10;

  if (session) {
    console.log('user should be logged in currently');
  } else console.log('User not logged in.');
  return (
    <div>
      <ColorCard cardMoney={cardMoney} setMoneyQuantity={setMoneyQuantity} />
    </div>
  );
}
