import { NextRequest, NextResponse } from 'next/server';
import { getAll, create, update, remove } from '@/lib/data';

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

// Handle preflight requests (required for CORS with POST/PUT/DELETE)
export async function OPTIONS() {
    return new NextResponse(null, { status: 204, headers: corsHeaders });
  }

export async function GET(req: NextRequest) {
  const prefix = req.nextUrl.searchParams.get('prefix') || undefined;
  return NextResponse.json(getAll(prefix), { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  create(data);
  return NextResponse.json({ message: 'Created' });
}

export async function PUT(req: NextRequest) {
  const { key, value } = await req.json();
  update(key, value);
  return NextResponse.json({ message: 'Updated' });
}

export async function DELETE(req: NextRequest) {
  const { key } = await req.json();
  remove(key);
  return NextResponse.json({ message: 'Deleted' });
}
