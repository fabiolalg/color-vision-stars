import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ParaPadres from "./pages/ParaPadres";
import ParaEscuelas from "./pages/ParaEscuelas";
import ParaNinos from "./pages/ParaNinos";
import Recursos from "./pages/Recursos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navigation language={language} onLanguageToggle={toggleLanguage} />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/para-padres" element={<ParaPadres language={language} />} />
                <Route path="/para-escuelas" element={<ParaEscuelas language={language} />} />
                <Route path="/para-ninos" element={<ParaNinos language={language} />} />
                <Route path="/recursos" element={<Recursos language={language} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </main>
            <Footer language={language} />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
