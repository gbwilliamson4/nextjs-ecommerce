interface cardComponentProps {
  title: string;
  description: string;
}

interface CardButtonProps {
  currentCount: number;
}

export default function CardComponent({ title, description }: cardComponentProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function CardButton({ currentCount }: CardButtonProps) {
  function coolStuff() {
    'use client';
    console.log('Cool stuff triggered');
  }

  return (
    <div>
      <button className="btn btn-outline">Button Is Here {currentCount}</button>
    </div>
  );
}
