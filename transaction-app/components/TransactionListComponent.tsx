"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TransactionListComponent() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  useEffect(() => {
    fetch(`${basePath}/api/transaction`)
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.key}>
          <strong>{item.key}</strong>: {item.value}
          <button onClick={() => router.push(`${basePath}/${item.key}`)}>
            View
          </button>
        </li>
      ))}
    </ul>
  );
}
