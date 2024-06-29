"use client";

import { useEffect, useRef, useState } from "react";

const Turnstile = () => {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  useEffect(() => {
    // Load the Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => setTurnstileLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    //@ts-ignore
    if (!turnstileLoaded || !turnstileRef.current || !window.turnstile) return;

    const handleVerify = (token: string) => {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "cf-turnstile-response";
      hiddenInput.value = token;
      turnstileRef.current?.closest("form")?.appendChild(hiddenInput);
    };
    //@ts-ignore
    const widgetId = window.turnstile.render(turnstileRef.current, {
      theme: "light",

      sitekey: "0x4AAAAAAAcSeHlw_xq5Ab-R",
      callback: handleVerify,
    });

    return () => {
      if (widgetId) {
        //@ts-ignore
        window.turnstile.remove(widgetId);
      }
    };
  }, [turnstileLoaded]);

  return <div ref={turnstileRef} />;
};

export default Turnstile;
