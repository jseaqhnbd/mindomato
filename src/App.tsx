
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import AssessmentResults from "./pages/AssessmentResults";
import Profile from "./pages/Profile";
import Exercises from "./pages/Exercises";
import BrainTraining from "./pages/BrainTraining";
import Audiobooks from "./pages/Audiobooks";
import AIChat from "./pages/AIChat";
import AICall from "./pages/AICall";
import ManagePayments from "./pages/ManagePayments";
import SleepStories from "./pages/SleepStories";
import Programs from "./pages/Programs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment-results" element={<AssessmentResults />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/brain-training" element={<BrainTraining />} />
          <Route path="/audiobooks" element={<Audiobooks />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/ai-call" element={<AICall />} />
          <Route path="/manage-payments" element={<ManagePayments />} />
          <Route path="/sleep-stories" element={<SleepStories />} />
          <Route path="/programs" element={<Programs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
