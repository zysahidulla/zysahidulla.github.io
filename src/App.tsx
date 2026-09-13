import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";

const queryClient = new QueryClient();

type TrailPoint = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
};

type Spark = {
  id: number;
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  hue: number;
};

const CursorSparkles = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const point: TrailPoint = {
        id: Date.now() + Math.random(),
        x: event.clientX,
        y: event.clientY,
        size: 8 + Math.random() * 12,
        opacity: 0.8,
        color: `hsl(${Math.random() * 60 + 310} 100% 70%)`,
      };

      setTrail((prev) => [...prev.slice(-12), point]);

      window.setTimeout(() => {
        setTrail((prev) => prev.filter((item) => item.id !== point.id));
      }, 180);
    };

    const handleClick = (event: PointerEvent) => {
      const burst = Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 12;
        const distance = 12 + Math.random() * 28;

        return {
          id: Date.now() + Math.random() + index,
          x: event.clientX,
          y: event.clientY,
          size: 4 + Math.random() * 8,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          hue: 300 + Math.random() * 90,
        };
      });

      setSparks((prev) => [...prev, ...burst]);

      window.setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => !burst.some((item) => item.id === spark.id)));
      }, 500);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerdown", handleClick);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerdown", handleClick);
    };
  }, []);

  return (
    <div className="cursor-sparkle-layer" aria-hidden="true">
      {trail.map((point) => (
        <span
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            width: `${point.size}px`,
            height: `${point.size}px`,
            opacity: point.opacity,
            background: point.color,
          }}
        />
      ))}

      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="cursor-pop"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            background: `hsl(${spark.hue} 100% 70%)`,
            ['--dx' as any]: `${spark.dx}px`,
            ['--dy' as any]: `${spark.dy}px`,
          }}
        />
      ))}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorSparkles />
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cv" element={<CV />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
