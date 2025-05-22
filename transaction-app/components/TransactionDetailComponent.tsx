'use client';
import { useEffect, useState } from 'react';

export default function TransactionDetailComponent({ id }: { id: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    fetch(`${basePath}/api/transaction`)
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
