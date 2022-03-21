import React, { useEffect, useState } from "react";

export default function Loading() {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(!fade);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex justify-center items-center">
      <h1>Panelinu</h1>
    </div>
  );
}
