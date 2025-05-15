'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/transfer')
  }, [router])

  return <p>Redirecting to /transfer...</p>
}
