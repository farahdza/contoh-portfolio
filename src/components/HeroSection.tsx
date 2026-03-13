import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/farahdza", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "https://instagram.com/farah.dza", label: "Instagram" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black"
    >

      {/* 3D BACKGROUND */}
      <ThreeScene />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* FOTO PROFIL PREMIUM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >

            <motion.div
              whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative group"
            >

              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              {/* Foto */}
              <img
                src="/foto.jpg"
                alt="Farah"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />

            </motion.div>

          </motion.div>

          {/* TEKS HERO */}
          <div className="text-center md:text-left">

            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur text-sm text-purple-400 mb-6"
            >
              👋 Selamat datang di portfolio farah
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Farah Portfolio X-3
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl"
            >
              Saya membangun aplikasi web modern yang cepat, indah dan scalable.
              Saya juga berbagi ilmu programming melalui konten edukatif.
            </motion.p>

            {/* TECH STACK */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start"
            >
              {["React", "Next.js", "Node.js", "Three.js", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start"
            >

              <Button
                size="lg"
                className="rounded-full px-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
                onClick={() => scrollTo("#projects")}
              >
                Lihat Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10"
                onClick={() => scrollTo("#contact")}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* SOCIAL ICON */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/5 border border-white/10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      >
        <ArrowDown className="w-5 h-5 text-purple-400" />
      </motion.button>

    </section>
  );
}