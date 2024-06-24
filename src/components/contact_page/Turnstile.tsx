"use client";

import { useEffect, useRef } from "react";

const Turnstile = () => {
  const turnstileRef = useRef(null);

  useEffect(() => {
    if (!turnstileRef.current) return;

    const handleVerify = (token: string) => {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "cf-turnstile-response";
      hiddenInput.value = token;
      // @ts-ignore
      turnstileRef.current.closest("form").appendChild(hiddenInput);
    };
    // @ts-ignore
    window.turnstile.render(turnstileRef.current, {
      theme: "light",
      sitekey: "0x4AAAAAAAcSeHlw_xq5Ab-R",
      callback: handleVerify,
    });

    return () => {
      if (turnstileRef.current) {
        // @ts-ignore
        window.turnstile.reset(turnstileRef.current);
      }
    };
  }, []);

  return <div ref={turnstileRef} />;
};

export default Turnstile;
