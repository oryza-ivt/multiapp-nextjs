"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type KVPair = {
  key: string;
  value: string;
};

export default function TransferListComponent() {
  const [data, setTransfers] = useState<KVPair[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:2222/api/transaction";
        // const res = await fetch(`${apiUrl}?prefix=trf`);
        const res = await fetch(`http://localhost:3000/api/transaction?prefix=trf`);
        const data = await res.json();
        setTransfers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.length === 0 && <p>No transfer transactions found.</p>}
      <ul>
        {data.map((item) => (
          <li key={item.key}>
            <strong>{item.key}</strong>: {item.value}
            <button
              onClick={() => router.push(`/transaction/${item.key}`)}
              style={{ marginLeft: "10px" }}
            >
              View
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
