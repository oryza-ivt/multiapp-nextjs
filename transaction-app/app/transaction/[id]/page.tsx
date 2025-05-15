'use client';
import { useParams } from 'next/navigation';
import TransactionDetailComponent from '@/components/TransactionDetailComponent';

export default function TransactionDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div>
      <h1>Detail for {id}</h1>
      <TransactionDetailComponent id={id} />
    </div>
  );
}
