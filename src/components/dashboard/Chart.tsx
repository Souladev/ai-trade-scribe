import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

export function Chart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          container_id: container.current.id,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#1A1F2C",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          studies: ["RSI@tv-basicstudies"],
          height: "100%",
          width: "100%",
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <Card className="h-[calc(100vh-5rem)] overflow-hidden">
      <div
        id="tradingview_widget"
        ref={container}
        className="h-full w-full"
      />
    </Card>
  );
}