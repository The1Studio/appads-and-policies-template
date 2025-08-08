import { NextResponse } from 'next/server';
import { dataCache } from '@/lib/cache';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const url = process.env.APP_ADS_URL;
  
  if (!url) {
    return new NextResponse('APP_ADS_URL environment variable is not configured', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  }

  try {
    const data = await dataCache.fetchData('app-ads', url);
    
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error fetching app-ads.txt:', error);
    return new NextResponse('Failed to fetch app-ads.txt content', { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      }
    });
  }
}