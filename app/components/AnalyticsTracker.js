// // filepath: c:\Users\nisar\Voyex-landing\app\components\AnalyticsTracker.jsx
// "use client";
// import { useEffect } from "react";

// export default function AnalyticsTracker() {
//     // Save an analytics event to local storage
//     function saveAnalytics(eventName, data) {
//         const analytics = JSON.parse(localStorage.getItem("analytics")) || [];
//         analytics.push({
//             event: eventName,
//             data,
//             timestamp: new Date().toISOString()
//         });
//         localStorage.setItem("analytics", JSON.stringify(analytics));
//     }

//     // Send stored analytics data using the Beacon API
//     function sendAnalyticsData() {
//         const analyticsData = localStorage.getItem("analytics");
//         if (analyticsData) {
//             navigator.sendBeacon("/api/analytics", analyticsData);
//             localStorage.removeItem("analytics");
//         }
//     }

//     useEffect(() => {
//         window.addEventListener("beforeunload", sendAnalyticsData);
//         document.addEventListener("click", handleClick);
//         window.sendAnalyticsData = sendAnalyticsData;

//         function handleClick(event) {
//             saveAnalytics("click", {
//                 element: event.target.tagName,
//                 id: event.target.id || null,
//             });
//         }

//         return () => {
//             window.removeEventListener("beforeunload", sendAnalyticsData);
//             document.removeEventListener("click", handleClick);
//         };
//     }, []);

//     return null;
// }

// 



'use client';
import { useEffect } from 'react';

const SESSION_KEY = 'voyex_session_id';
const ANALYTICS_KEY = 'analytics';

async function getSessionId() {
    // Only get a new session if not already present
    if (localStorage.getItem(SESSION_KEY)) return localStorage.getItem(SESSION_KEY);

    const res = await fetch("https://r98ngavlng.execute-api.ap-southeast-2.amazonaws.com/default/voyex_analytics", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            service: "session",
            entity_type: "user",
            entity_id: "21123",
            referrer: document.referrer || "direct",
            path: window.location.pathname
        })
    });
    const data = await res.json();
    // Adjust this if your API returns a different key
    const sessionId = data.session_id || data.id || JSON.stringify(data);
    localStorage.setItem(SESSION_KEY, sessionId);
    return sessionId;
}

function saveAnalytics(eventName, data) {
    const analytics = JSON.parse(localStorage.getItem(ANALYTICS_KEY)) || [];
    analytics.push({
        event: eventName,
        data,
        timestamp: new Date().toISOString(),
        session_id: localStorage.getItem(SESSION_KEY)
    });
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
}

async function sendAnalyticsData() {
    const analyticsData = localStorage.getItem(ANALYTICS_KEY);
    if (analyticsData) {
        // Send to your remote API
        await fetch("https://r98ngavlng.execute-api.ap-southeast-2.amazonaws.com/default/voyex_analytics", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: analyticsData
        });
        localStorage.removeItem(ANALYTICS_KEY);
    }
}

export default function AnalyticsTracker() {
    useEffect(() => {
        // Get session on mount
        getSessionId();

        // Track clicks
        const handleClick = (event) => {
            saveAnalytics('click', {
                element: event.target.tagName,
                id: event.target.id || null,
                class: event.target.className || null,
                text: event.target.textContent || null
            });
        };

        // Send analytics on unload
        window.addEventListener('beforeunload', sendAnalyticsData);
        document.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('beforeunload', sendAnalyticsData);
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return null;
}