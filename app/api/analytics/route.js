export async function POST(request) {
    try {
        const analyticsData = await request.json(); // Parse JSON from request
        console.log("Received analytics data:", analyticsData);
        
        // If this is a session request
        if (analyticsData.service === "session") {
            return Response.json({
                session_id: `sess_${Math.random().toString(36).substring(2)}`,
                entity_type: analyticsData.entity_type,
                entity_id: analyticsData.entity_id,
                path: analyticsData.path
            });
        }
        
        // If this is an analytics event
        return Response.json({ 
            status: "success",
            message: "Analytics received"
        });
    } catch (error) {
        console.error("Error processing analytics:", error);
        return Response.json({ 
            status: "error",
            message: error.message 
        }, { status: 400 });
    }
}

export async function GET() {
    return Response.json({ 
        status: "success",
        message: "Analytics endpoint is working"
    });
}