import { NextResponse } from 'next/server';

// Simple server-side endpoint that attempts to use configured auction APIs
// If no API keys are configured, it returns a curated sample dataset.
export async function GET() {
  try {
    const COPART_API_KEY = process.env.COPART_API_KEY;
    const IAA_API_KEY = process.env.IAA_API_KEY;

    // If real APIs are configured, you would call them here. Example (pseudo):
    // const res = await fetch(`https://api.copart.com/auctions?apikey=${COPART_API_KEY}`);
    // const data = await res.json();
    // transform data -> vehicles

    // Fallback sample data
    const sample = [
      {
        id: 'c1',
        title: '2018 Toyota Hilux 2.8 D-4D',
        lot: 'COP-1234567',
        image: '/etillogo.jpeg',
        location: 'Accra, Ghana',
        status: 'Available',
        damage: 'Front end',
        price: '£4,200'
      },
      {
        id: 'c2',
        title: '2016 Ford Ranger 3.2 TDCi',
        lot: 'IAA-7654321',
        image: '/etillogo.jpeg',
        location: 'Lagos, Nigeria',
        status: 'Available',
        damage: 'Rear',
        price: '£3,800'
      },
      {
        id: 'c3',
        title: '2015 Mercedes Sprinter 311',
        lot: 'COP-246810',
        image: '/etillogo.jpeg',
        location: 'Tema, Ghana',
        status: 'Sold',
        damage: 'None',
        price: '£6,500'
      }
    ];

    return NextResponse.json({ vehicles: sample });
  } catch (err) {
    return NextResponse.json({ vehicles: [], error: String(err) }, { status: 500 });
  }
}
