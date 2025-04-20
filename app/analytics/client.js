// app/analytics/client.js

export async function createSession() {
    try {
      const res = await fetch("https://r98ngavlng.execute-api.ap-southeast-2.amazonaws.com/default/voyex_analytics+", {
        method: "POST",
        credentials: "include",
      });
  
      const data = await res.json();
      console.log("Session API Response:", data);
      console.log("Session Headers:", [...res.headers.entries()]);
      return data;
    } catch (err) {
      console.error("Error creating session:", err);
    }
  }
  
  export async function sendAnalytics(analyticsData) {
    try {
      const res = await fetch("https://r98ngavlng.execute-api.ap-southeast-2.amazonaws.com/default/voyex_analytics", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(analyticsData),
      });
  
      const data = await res.json();
      console.log("Analytics API Response:", data);
      console.log("Analytics Headers:", [...res.headers.entries()]);
      return data;
    } catch (err) {
      console.error("Error sending analytics:", err);
    }
  }
  