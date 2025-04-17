// filepath: c:\Users\nisar\Voyex-landing\app\api\analytics\route.js
export async function POST(request) {
    const analyticsData = await request.text(); // Beacon sends text/plain by default
    console.log("Received analytics data:", analyticsData);
    return new Response("Analytics received", { status: 200 });
}

export async function GET() {
    return new Response("Analytics endpoint is working", { status: 200 });
}