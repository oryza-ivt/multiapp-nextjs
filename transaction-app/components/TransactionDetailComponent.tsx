'use client';
import { useEffect, useState } from 'react';

export default function TransactionDetailComponent({ id }: { id: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/transaction')
      .then(res => res.json())
      .then((items) => {
        const item = items.find((i: any) => i.key === id);
        setData(item);
      });
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>{data.key}</h2>
      <p>{data.value}</p>
    </div>
  );
}
