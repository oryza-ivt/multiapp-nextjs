'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TransactionListComponent() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1111/api/transaction";
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api/transaction";
    fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.key}>
          <strong>{item.key}</strong>: {item.value}
          <button onClick={() => router.push(`/transaction/${item.key}`)}>View</button>
        </li>
      ))}
    </ul>
  );
}
