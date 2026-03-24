import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


// 🌌 PARTICLE COMPONENT
function Particles() {
  const particles = Array.from({ length: 25 });

  return (
    <>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            x: Math.random() * 1000,
            y: Math.random() * 800,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [null, Math.random() * -200],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
          }}
          className="absolute w-1 h-1 bg-white rounded-full"
        />
      ))}
    </>
  );
}


// 🔥 ULTRA LOADING
function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >

      {/* PARTICLES */}
      <Particles />

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full animate-pulse" />

      {/* LOGO */}
      <motion.h1
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold tracking-widest z-10"
      >
        FARAH
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-3 text-gray-400 z-10"
      >
        Crafting Digital Experience...
      </motion.p>

      {/* PROGRESS */}
      <div className="w-56 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden z-10">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-primary to-pink-500"
        />
      </div>

      {/* FLOATING LIGHT */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 w-32 h-32 bg-primary/10 blur-2xl rounded-full"
      />

    </motion.div>
  );
}


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;