// app/analytics/useAnalytics.js

import { useEffect, useState } from "react";
import { createSession, sendAnalytics } from "./client";

export function useAnalytics() {
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    const sessionCookieExists = document.cookie.includes("session_meta");

    if (!sessionCookieExists) {
      createSession().then(() => setSessionReady(true));
    } else {
      setSessionReady(true);
    }

    const handleClick = () => {
      const analytics = {
        event: "click",
        timestamp: new Date().toISOString(),
        url: window.location.href,
      };

      localStorage.setItem("voyex_analytics", JSON.stringify(analytics));
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!sessionReady) return;

    const timeout = setTimeout(() => {
      const data = JSON.parse(localStorage.getItem("voyex_analytics"));
      if (data) {
        sendAnalytics(data);
        localStorage.removeItem("voyex_analytics");
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [sessionReady]);
}
