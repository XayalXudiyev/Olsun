import { NextResponse } from 'next/server'

// Simple mock API for /api/items?category=...
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') ?? 'General'

  // Mock items
  const items = Array.from({ length: 8 }).map((_, i) => ({
    id: `item-${category}-${i}`,
    category,
    imageSrc: '/images/rafting.png',
    title: ['Rafting', 'Camping', 'Tennis', 'Yoga'][i % 4],
    subtitle: 'Minimum iştirakçı sayı:',
    count: 4 + i,
  }))

  return NextResponse.json({ items })
}
