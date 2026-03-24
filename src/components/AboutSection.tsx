import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function AboutSection() {
  const [open, setOpen] = useState<string | null>(null);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  const sections = [
    {
      title: 'Tentang Saya',
      content:
        'Hi, my name is Farah Dzakirah Fahri, but you can call me Farah. I am a beginner web developer who is passionate about technology and web development.',
    },
    {
      title: 'Karakter & Sikap',
      content:
        'Saya adalah pribadi yang disiplin, bertanggung jawab, dan selalu ingin berkembang.',
    },
    {
      title: 'Tujuan & Visi',
      content:
        'Tujuan saya adalah menjadi web developer profesional yang menciptakan website user-friendly.',
    },
  ];

  const toggle = (title: string) => {
    setOpen(open === title ? null : title);
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden glass shadow-card"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20"
              >
                <span className="text-8xl">👩‍💻</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ACCORDION */}
          <div className="space-y-4">
            {sections.map((sec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="border rounded-xl overflow-hidden backdrop-blur-md"
              >

                {/* HEADER */}
                <button
                  onClick={() => toggle(sec.title)}
                  className="w-full flex justify-between items-center p-4 bg-white/50 hover:bg-white/80 transition-all duration-300"
                >
                  <span className="font-semibold text-left">
                    {sec.title}
                  </span>

                  <motion.div
                    animate={{ rotate: open === sec.title ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <ChevronDown />
                  </motion.div>
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {open === sec.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-4 text-muted-foreground"
                      >
                        {sec.content}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.08 }}
                  className="p-4 glass rounded-xl text-center cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="inline-block"
                  >
                    <stat.icon className="mx-auto mb-2 text-primary" />
                  </motion.div>

                  <p className="font-bold text-xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}