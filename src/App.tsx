import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Careers from "./pages/Careers";
import Roadmap from "./pages/Roadmap";
import LMS from "./pages/LMS";
import SkillShop from "./pages/SkillShop";
import Community from "./pages/Community";
import Jobs from "./pages/Jobs";
import Assessment from "./pages/Assessment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/lms" element={<LMS />} />
            <Route path="/shop" element={<SkillShop />} />
            <Route path="/community" element={<Community />} />
            <Route path="/jobs" element={<Jobs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
