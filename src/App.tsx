import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CV from "./pages/CV";
import ProjectDetailPage from "./pages/ProjectDetail";

const queryClient = new QueryClient();

const App = () => {
  const [showUpdateNotice, setShowUpdateNotice] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Temporary notice - remove this block when the portfolio is finished */}
        {showUpdateNotice && (
          <div className="pointer-events-none fixed inset-x-0 top-0 z-[9999] flex justify-center px-4 pt-4">
            <div className="pointer-events-auto w-full max-w-xl rounded-xl border border-amber-400/50 bg-amber-500/10 px-4 py-3 shadow-2xl backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-amber-200">Portfolio update in progress</p>
                  <p className="mt-1 text-sm text-amber-50/90">
                    This portfolio is currently being updated and will be finished sooner or later. For now, you can look through my projects and information about myself.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Dismiss update notice"
                  onClick={() => setShowUpdateNotice(false)}
                  className="rounded-full p-1 text-amber-100/80 transition hover:bg-amber-300/10 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}

        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
